public class Main {

    public static void main(String[] args) {

        // Create Product objects
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Keyboard", "Electronics"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "Watch", "Accessories")
        };

        int targetId = 104;

        // Linear Search
        Product linearResult = SearchAlgorithms.linearSearch(products, targetId);

        System.out.println("----- Linear Search -----");

        if (linearResult != null) {
            System.out.println("Product Found");
            System.out.println("Product ID : " + linearResult.productId);
            System.out.println("Product Name : " + linearResult.productName);
            System.out.println("Category : " + linearResult.category);
        } else {
            System.out.println("Product Not Found");
        }

        // Binary Search
        Product binaryResult = SearchAlgorithms.binarySearch(products, targetId);

        System.out.println("\n----- Binary Search -----");

        if (binaryResult != null) {
            System.out.println("Product Found");
            System.out.println("Product ID : " + binaryResult.productId);
            System.out.println("Product Name : " + binaryResult.productName);
            System.out.println("Category : " + binaryResult.category);
        } else {
            System.out.println("Product Not Found");
        }
    }
}
