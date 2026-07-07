public class Main {

    public static void main(String[] args) {

        // Create Inventory Manager
        InventoryManager manager = new InventoryManager();

        // Create Products
        Product p1 = new Product(101, "Laptop", 20, 55000);
        Product p2 = new Product(102, "Mouse", 150, 500);
        Product p3 = new Product(103, "Keyboard", 80, 1200);

        // Add Products
        manager.addProduct(p1);
        manager.addProduct(p2);
        manager.addProduct(p3);

        System.out.println("\n----- Inventory After Adding Products -----");
        manager.displayProducts();

        // Update Product
        manager.updateProduct(102, "Wireless Mouse", 200, 700);

        System.out.println("\n----- Inventory After Updating Product -----");
        manager.displayProducts();

        // Delete Product
        manager.deleteProduct(103);

        System.out.println("\n----- Inventory After Deleting Product -----");
        manager.displayProducts();
    }
}
