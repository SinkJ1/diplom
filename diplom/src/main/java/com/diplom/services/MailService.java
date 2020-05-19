package com.diplom.services;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.diplom.entity.Sender;

public class MailService {

	private Sender sender;
	
	public MailService(Sender sender) {
		this.sender = sender;
	}
	
	public void sendMail(String recepient,String text) throws Exception {
		
		Properties properties = new Properties();
		
		properties.put("mail.smtp.auth","true");
		properties.put("mail.smtp.starttls.enable","true");
		properties.put("mail.smtp.host","smtp.gmail.com");
		properties.put("mail.smtp.port","587");
		
		final String myAccountEmail = sender.geteMail();
		final String password = sender.getPassword();
		
		Session session = Session.getInstance(properties, new Authenticator(){
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(myAccountEmail, password);
			}
		});
		Message message = prepareMessage(session, myAccountEmail, recepient, text);
		
		Transport.send(message);
	}
	
	private static Message prepareMessage(Session session, String myAccountEmail, String recepient, String text) {
		Message message = new MimeMessage(session);
		try {
			message.setFrom(new InternetAddress(myAccountEmail));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(recepient));
			message.setSubject("Похоже что-то из вашего списака ожидаемого вышло");
			message.setText(text);
			return message;
		} catch (AddressException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
}