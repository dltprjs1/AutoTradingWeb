package com.AutoTrading.Socket;

import java.net.Socket;
import org.springframework.web.socket.TextMessage;
import java.io.*;

public class AutoTrading_Client extends Thread {
	Socket client = null;
	BufferedReader in = null;
	PrintWriter out = null;
	AutoTrading_WebSocket_handler Handler = new AutoTrading_WebSocket_handler();
	
	@Override
	public void run() {
		try {
			client = new Socket("127.0.0.1",7777);
			System.out.println("[서버와 연결되었습니다]");
			
			in = new BufferedReader(new InputStreamReader(client.getInputStream()));			
			out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(client.getOutputStream(), "euc-kr")), true);
			
			out.println("AutoTrading_Web_Connection");
			out.flush();
			
			while(in != null){
				String inputMsg = in.readLine();
				System.out.println(inputMsg);
				Handler.handleTextMessage(null,new TextMessage(inputMsg));
			}
		} catch (Exception e) {
			System.out.println("[서버 접속끊김]");
			System.out.println(e.getMessage());
		}finally {
			try {
				client.close();
			}catch(Exception e) {
				System.out.println(e.getMessage());
			}
		}
		
	}
	
	public void CloseClient() {
		try {
			if (out != null) out.close();
			if (in != null) in.close();
			if (client != null) client.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
