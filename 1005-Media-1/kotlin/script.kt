import java.util.Scanner

fun main(){
    val scan = Scanner(System.`in`)

    val nota1:Double = scan.nextLine().trim().toDouble()
    val nota2:Double = scan.nextLine().trim().toDouble()

    val media:Double = ((nota1*3.5) + (nota2*7.5))/11

    println("MEDIA = %.5f".format(media))

}
