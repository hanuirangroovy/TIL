package lec03;

import java.util.Scanner;

public class Scan {
    // main 치면 여기서부터 프로그램이 시작
    public static void main(String[] args) {
        // 입력을 받을 스캐너를 만든다. new: 새로운, System.in : 시스템 안으로 스캔한다.
        Scanner scan = new Scanner(System.in);

        // String : 문장이라는 뜻
        // str : 입력받은 문장의 이름
        // scanner.nextLine() : 한 줄을 입력받는다.
        String str = scan.nextLine();

        // str에 있는 문장을 출력해라
        System.out.println(str);
    }

    /**
     * scanner.nextLine()을 하는 순간
     *
     * str 이라는 이름표가 붙은 상자가 하나 생긴다.
     * 이 상자에는 '문장'만 들어올 수 있다. -> 상자를 String이라고 만들었기 때문에
     *
     * System.out.println(str) 를 하게 되면 상자 안에 있는 '문장'을 가져와서 출력
     * System.out.println('str') 를 하게 되면 str이 출력
     */


}
