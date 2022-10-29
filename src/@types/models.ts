export interface Props {
    children: React.ReactNode
}

type BaseModel = {
    id: number | string
}

export type ImageModel = BaseModel & {
    description?: string,
    imageUrl: string,
    productId: number
}

export type ProductModel = BaseModel & {
    productName: string,
    description: string,
    productPrice: number,
    categoryId: number,
    productImages?: Array<ImageModel>
}