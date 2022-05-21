package japodsiadly.io.equation.controler;

import japodsiadly.io.equation.logic.EquationService;
import japodsiadly.io.equation.model.Equation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
class IntegralController {
    private final EquationService equationService;

//    @GetMapping("/equationSolver")
//    ResponseEntity<?> solveEquation(@RequestBody Equation equation){
//        return ResponseEntity.ok(equationService.calculateEquation(equation));
//    }

    @GetMapping("/makePlot")
    ResponseEntity<?> makePlot(@RequestBody Equation equation){
        return ResponseEntity.ok(equationService.makePlot(equation));
    }
}
