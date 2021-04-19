import java.util.Scanner;

public class Main{

  public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    String entrada = input.nextLine();

    String[] coordenadas = entrada.split(" ");

    float X = Float.valueOf(coordenadas[0]).floatValue();
    float Y = Float.valueOf(coordenadas[1]).floatValue();

    if ( X > 0.0 && Y > 0.0){
      System.out.println("Q1");
    }else if(X < 0.0 && Y > 0.0){
      System.out.println("Q2");
    }else if(X < 0.0 && Y < 0.0){
      System.out.println("Q3");
    }else if(X > 0.0 && Y < 0.0){
      System.out.println("Q4");
    }else if((X == 0.0 && Y > 0.0) || (X == 0.0 && Y < 0.0)){
      System.out.println("Eixo Y");
    }else if((X > 0.0 && Y == 0.0) || (X < 0.0 && Y == 0.0)){
      System.out.println("Eixo X");
    }else{
      System.out.println("Origem");
    }
  }
}
