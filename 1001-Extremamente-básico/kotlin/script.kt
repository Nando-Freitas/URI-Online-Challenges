import java.util.Scanner

fun main(){

    val scan = Scanner(System.`in`)

    val A:Int = scan.nextLine().trim().toInt()
    val B:Int = scan.nextLine().trim().toInt()

    val X:Int = A + B

    println("X = " + X)
}
