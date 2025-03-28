"""
Utility functions for the application.

This module contains utility functions that can be used across the application.
Common functionality like data processing, validation helpers, and other
reusable logic should be placed here.
"""

from app.utils.date_utils import (
    get_today,
    get_current_year,
    generate_id_with_year_prefix,
    format_date,
    parse_date
)

from app.utils.pagination import (
    PageParams,
    Page,
    paginate_query
)

# Add utility functions here as needed 