package japodsiadly.io.integral.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class Equation {
    private final double[] equation;
    private final double x;
}
