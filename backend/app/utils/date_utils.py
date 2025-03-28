"""
Date and time utility functions.
"""
from datetime import date, datetime, timedelta
from typing import Optional

def get_today() -> date:
    """Return today's date."""
    return date.today()

def get_current_year() -> int:
    """Return the current year as an integer."""
    return date.today().year

def generate_id_with_year_prefix(prefix: str, count: int, digits: int = 3) -> str:
    """
    Generate an ID with year prefix and zero-padded count.
    
    Example: 
        generate_id_with_year_prefix("STU", 42) -> "STU2023042" (if current year is 2023)
    """
    year = get_current_year()
    return f"{prefix}{year}{str(count).zfill(digits)}"

def format_date(dt: date, format_str: str = "%Y-%m-%d") -> str:
    """Format a date object to string using the specified format."""
    return dt.strftime(format_str)

def parse_date(date_str: str, format_str: str = "%Y-%m-%d") -> Optional[date]:
    """
    Parse a date string into a date object.
    Returns None if parsing fails.
    """
    try:
        return datetime.strptime(date_str, format_str).date()
    except ValueError:
        return None 