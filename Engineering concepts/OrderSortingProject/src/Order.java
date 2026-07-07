public class Order {

    private int orderId;
    private String customerName;
    private double totalPrice;


    public Order(int orderId, String customerName, double totalPrice) {

        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;

    }


    // Getter method for totalPrice
    public double getTotalPrice() {

        return totalPrice;

    }


    public void displayOrder() {

        System.out.println(
            "Order ID: " + orderId +
            ", Customer: " + customerName +
            ", Total Price: " + totalPrice
        );

    }

}