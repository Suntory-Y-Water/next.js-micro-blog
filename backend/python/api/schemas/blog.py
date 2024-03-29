from pydantic import BaseModel, Field
from datetime import datetime
import uuid


class BlogBase(BaseModel):
    """
    ブログのベーススキーマ
    """

    title: str = Field(..., example="ブログのタイトル")
    content: str = Field(..., example="ブログの内容")


class BlogCreate(BlogBase):
    """
    ブログの作成時のスキーマ
    """

    pass


class BlogCreateResponse(BlogBase):
    """
    ブログの作成時のレスポンススキーマ
    """

    id: uuid.UUID = Field(..., example="123e4567-e89b-12d3-a456-426614174000")
    createdAt: datetime = Field(..., example="2024-01-15T13:07:45.208Z")


class Blog(BlogBase):
    """
    ブログのスキーマ
    """

    id: uuid.UUID = Field(..., example="123e4567-e89b-12d3-a456-426614174000")
    createdAt: datetime = Field(..., example="2024-01-15T13:07:45.208Z")
