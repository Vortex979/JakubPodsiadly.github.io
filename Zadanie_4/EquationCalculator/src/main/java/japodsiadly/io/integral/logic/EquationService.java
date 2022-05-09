package japodsiadly.io.integral.logic;

import japodsiadly.io.integral.model.Equation;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log
public class EquationService {

    public double calculateEquation(Equation equation){
        double result = 0;

        for (int i=0; i < equation.getEquation().length ; i++) {
            if (equation.getEquation()[i]==0){
                continue;
            }
            double partialResult = 1;
            for (int j = 0; j < equation.getEquation().length - 1 - i ; j++) {
                partialResult*= equation.getX();
            }
            result += equation.getEquation()[i] * partialResult;
            log.info(equation.getEquation()[i] + " * " + partialResult + " = " + result);
        }
        return result;
    }
}
