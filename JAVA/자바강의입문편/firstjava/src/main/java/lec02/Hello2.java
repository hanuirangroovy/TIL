package lec02;

public class Hello2 {

    public static void main(String[] args) {
        // 컴퓨터는 바보다
        // 컴퓨터는 바보라서 큰 따옴표(")가 있으면 얘는 문장이라고 생각한다.
        // System.out.println("3");

        // 큰 따옴표(")가 없으면 숫자라고 생각한다.
        System.out.println(3);

        System.out.println("3" + "3"); // 33

        System.out.println(3 + 3); // 6

        // 숫자에도 종류가 있다. 정수, 실수, 음수
        System.out.println(1.4);
        System.out.println(-100);
        System.out.println(-3.11);

        // 컴퓨터는 바보라서 문장이랑 문자를 구별합니다.
        // 문자는 작은 따옴표('')
        System.out.println('A');

        // 특수 문자 : 역슬래시(\)를 사용한다.
        System.out.println("\"");
        System.out.println("\"Hello World\"");

        // \n을 사용하면 엔터를 칠 수 있다.
        System.out.println("Hello\nWorld");

        // \t : 탭, \b : 백스페이스
    }
}
