import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class BMIServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        PrintWriter out = response.getWriter();

        double h = Double.parseDouble(request.getParameter("height"));
        double w = Double.parseDouble(request.getParameter("weight"));

        double bmi = w / (h * h);

        out.println("BMI = " + bmi);
    }
}