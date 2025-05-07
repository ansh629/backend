export class ProductController {
    constructor(private productService: any) {}

    async addProduct(req: any, res: any) {
        try {
            const productData = req.body;
            const newProduct = await this.productService.createProduct(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: 'Error adding product', error });
        }
    }

    async updateProduct(req: any, res: any) {
        try {
            const productId = req.params.id;
            const productData = req.body;
            const updatedProduct = await this.productService.updateProduct(productId, productData);
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating product', error });
        }
    }

    async getProduct(req: any, res: any) {
        try {
            const productId = req.params.id;
            const product = await this.productService.getProductById(productId);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving product', error });
        }
    }

    async getAllProducts(req: any, res: any) {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving products', error });
        }
    }
}