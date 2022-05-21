package japodsiadly.io.equation.logic;

import japodsiadly.io.equation.model.Equation;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Log
public class EquationService {
    public String createEquation(Equation equation) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < equation.getEquation().length; i++) {
            if (equation.getEquation()[i] == 0) {
                continue;
            }
            final String partialResult = "x" + "*x".repeat(Math.max(0, equation.getEquation().length - 1 - i));
            result.append(equation.getEquation()[i])
                    .append("*")
                    .append(partialResult)
                    .append("+");
        }

        result.deleteCharAt(result.length() - 1);

        return result.toString();
    }

}
