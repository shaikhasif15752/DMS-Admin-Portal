package com.admin.login;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.admin.bean.Admin;
import com.admin.dao.ChangePasswordDAO;

/**
 *@author Asif
 *@date 16/12/2017
 */

@WebServlet("/ChangePassword")
public class ChangePassword extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangePassword() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String  password=request.getParameter("password");
		String 	newPassword=request.getParameter("newpassword");
		PrintWriter out = response.getWriter();
		//System.out.println("Password..."+password);
		//System.out.println("New Password"+newPassword);
		Admin a=new Admin();
		a.setPassword(password);
		a.setNewPassword(newPassword);
		ChangePasswordDAO changePasswordDAO=new ChangePasswordDAO();
		if(!changePasswordDAO.checkPassword(a)) {
			 out.println("<script type=\"text/javascript\">");
			   out.println("alert('Unable to change password!');");
			   out.println("location='profile.jsp';");
			   out.println("</script>");
			   
			}
		else {
		       out.println("<script type=\"text/javascript\">");
			   out.println("alert('Password Change successfully!');");
			   out.println("</script>");
			  }
		
		doGet(request, response);
	}

}
