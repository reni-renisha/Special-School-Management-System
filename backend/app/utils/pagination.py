"""
Pagination utilities for standardizing list endpoints.
"""
from typing import Generic, List, Optional, TypeVar, Dict, Any
from fastapi import Query
from pydantic import BaseModel
import math

T = TypeVar("T")

class PageParams:
    """
    Standard pagination parameters.
    Should be used as fastapi dependencies in endpoints.
    """
    def __init__(
        self, 
        page: int = Query(1, ge=1, description="Page number starting from 1"),
        page_size: int = Query(20, ge=1, le=100, description="Number of items per page (max 100)")
    ):
        self.page = page
        self.page_size = page_size
        self.skip = (page - 1) * page_size


class Page(BaseModel, Generic[T]):
    """
    Standard pagination response that includes metadata.
    """
    items: List[T]
    total: int
    page: int
    page_size: int
    pages: int
    
    @classmethod
    def create(cls, items: List[T], total: int, params: PageParams) -> "Page[T]":
        """Create a Page from a list of items, total count, and page parameters."""
        pages = math.ceil(total / params.page_size) if total > 0 else 0
        return cls(
            items=items,
            total=total,
            page=params.page,
            page_size=params.page_size,
            pages=pages
        )


def paginate_query(query: Any, params: PageParams) -> Dict[str, Any]:
    """
    Apply pagination to a SQLAlchemy query and return a dict with items and total.
    
    This is a lower-level helper that doesn't create a Page object directly.
    """
    total = query.count()
    items = query.offset(params.skip).limit(params.page_size).all()
    return {
        "items": items,
        "total": total
    } 