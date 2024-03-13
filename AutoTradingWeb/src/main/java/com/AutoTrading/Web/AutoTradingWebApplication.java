package com.AutoTrading.Web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.AutoTrading.Socket.AutoTrading_Client;


@SpringBootApplication
public class AutoTradingWebApplication {
	final private static AutoTrading_Client SocketClient = new AutoTrading_Client();
	public static void main(String[] args) {
		SpringApplication.run(AutoTradingWebApplication.class, args);
		SocketClient.start();
	}

}

//@SpringBootApplication
//public class AutoTradingWebApplication {
//	public static void main(String[] args) {
//		SpringApplication.run(AutoTradingWebApplication.class, args);
//	}
//
//}