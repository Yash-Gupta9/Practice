public class Main {

    public static void main(String[] args) {


        Order[] orders = {

            new Order(101, "Rahul", 5000),
            new Order(102, "Amit", 2000),
            new Order(103, "Yash", 8000),
            new Order(104, "Raj", 3000)

        };


        System.out.println("Before Sorting:");

        for(Order order : orders) {
            order.displayOrder();
        }


        SortingAlgorithms.bubbleSort(orders);


        System.out.println("\nAfter Bubble Sort:");

        for(Order order : orders) {
            order.displayOrder();
        }


        SortingAlgorithms.quickSort(orders, 0, orders.length - 1);


        System.out.println("\nAfter Quick Sort:");

        for(Order order : orders) {
            order.displayOrder();
        }

    }
}
