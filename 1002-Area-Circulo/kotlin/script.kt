import java.util.Scanner

fun main(){

	val scan = Scanner(System.`in`)

	val raio:Double = scan.nextLine().trim().toDouble()
	val pi = 3.14159

	val area:Double = pi*(raio*raio)

	println("A=%.4f".format(area))
}
