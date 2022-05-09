package japodsiadly.io.equation.logic;

import japodsiadly.io.equation.model.Equation;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log
public class EquationService {

    public double calculateEquation(Equation equation) {
        double result = 0;

        for (int i = 0; i < equation.getEquation().length; i++) {
            if (equation.getEquation()[i] == 0) {
                continue;
            }
            double partialResult = 1;
            for (int j = 0; j < equation.getEquation().length - 1 - i; j++) {
                partialResult *= equation.getX();
            }
            result += equation.getEquation()[i] * partialResult;
//            log.info(equation.getEquation()[i] + " * " + partialResult + " = " + result);
        }
        return result;
    }

//    public double[] makePlot(Equation equation) {
    public JSONArray makePlot(Equation equation) {
        double[] ouputValuesX = new double[2000];
        double[] inputValuesX = new double[2000];

        double x = -100;
        inputValuesX[0] = x;

        for (int i = 0; i < ouputValuesX.length; i++) {
            equation.setX(x);
            ouputValuesX[i] = calculateEquation(equation);
            x+= 0.1;
            inputValuesX[i] = x;
//            log.info("Make plot" + String.valueOf(inputValuesX[i]));
        }
        JSONObject inutValuesXJSon = new JSONObject();
        inutValuesXJSon.put("X", inputValuesX);

        JSONObject ouputValuesXJSon = new JSONObject();
        ouputValuesXJSon.put("Y", ouputValuesX);

        JSONArray output = new JSONArray();
        output.add(inutValuesXJSon);
        output.add(ouputValuesXJSon);

//        return ouputValuesX;
        return output;
    }
}
