from api.db import get_db
import api.cruds.blog as blog_crud
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import APIRouter, Depends, HTTPException
import api.schemas.blog as schema

router = APIRouter()


@router.get("/python/blog", response_model=list[schema.Blog])
async def read_all_blogs(db: AsyncSession = Depends(get_db)):
    """
    ブログを全件取得する
    """
    return await blog_crud.get_all_blogs(db)


@router.get("/python/blog/{blog_id}", response_model=schema.Blog)
async def read_blog(blog_id: str, db: AsyncSession = Depends(get_db)):
    """
    個別のブログを取得する
    """
    if blog_id is None:
        raise HTTPException(status_code=404, detail="Blog not found")

    return await blog_crud.get_blog_by_id(db, blog_id)


@router.post("/python/blog", response_model=schema.BlogCreateResponse)
async def create_blog(blog_body: schema.BlogCreate, db: AsyncSession = Depends(get_db)):
    """
    ブログを作成する
    """
    return await blog_crud.create_blog(db, blog_body)


@router.delete("/python/blog/{blog_id}", response_model=None)
async def delete_blog(blog_id: str, db: AsyncSession = Depends(get_db)):
    """
    ブログを削除する。
    """
    if blog_id is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    return await blog_crud.delete_blog(db, blog_id)
