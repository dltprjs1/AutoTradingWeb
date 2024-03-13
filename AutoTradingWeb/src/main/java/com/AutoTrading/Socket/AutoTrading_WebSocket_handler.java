package com.AutoTrading.Socket;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import java.util.concurrent.ConcurrentHashMap;

public class AutoTrading_WebSocket_handler extends TextWebSocketHandler {
	private static final ConcurrentHashMap<String, WebSocketSession> Client = new ConcurrentHashMap<String, WebSocketSession>();
	private static final AutoTrading_Client Socket = new AutoTrading_Client();
	// == OnOpen
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {    	
    	Client.put(session.getId(), session);
    	
    }

	// == OnClose
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
    	Client.remove(session.getId());
    	Socket.CloseClient();    	
    }

	// == OnMessage
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        Client.entrySet().forEach( arg->{
            try {
                arg.getValue().sendMessage(message);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }
    
}
