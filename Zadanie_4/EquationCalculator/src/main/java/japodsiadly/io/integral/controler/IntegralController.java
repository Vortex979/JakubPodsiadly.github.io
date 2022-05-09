package japodsiadly.io.integral.controler;

import japodsiadly.io.integral.logic.EquationService;
import japodsiadly.io.integral.model.Equation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
class IntegralController {
    private final EquationService equationService;

    @GetMapping("/equationSolver")
    ResponseEntity<?> solve(@RequestBody Equation equation){
        return ResponseEntity.ok(equationService.calculateEquation(equation));
    }
}
