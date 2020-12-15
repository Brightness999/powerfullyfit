import 'package:flutter/material.dart';
import 'dart:math';

import 'package:mobile_app/theme/colors.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
import 'package:vector_math/vector_math.dart' show radians;

class ArcChart extends StatefulWidget {
  @override
  _ArcChart createState() => _ArcChart();
}

class _ArcChart extends State<ArcChart> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.center,
      children: [
        Center(
          child: CircularStepProgressIndicator(
            totalSteps: 100,
            currentStep: 32,
            stepSize: 9,
            selectedColor: Colors.redAccent,
            unselectedColor: Colors.grey[200],
            padding: 0,
            height: MediaQuery.of(context).size.height * .32,
            width: MediaQuery.of(context).size.height * .32,
            selectedStepSize: MediaQuery.of(context).size.height * .025,
            roundedCap: (_, __) => true,
          ),
        ),
        _buildArc(
          0,
          color: Colors.greenAccent,
          currentFill: 75,
          totalSteps: 100,
        ),
        _buildArc(
          pi * (2 / 3),
          color: appBrown,
          currentFill: 25,
          totalSteps: 100,
        ),
        _buildArc(
          pi * (4 / 3),
          color: Colors.blueAccent,
          currentFill: 50,
          totalSteps: 100,
        ),
        // ...omitted
      ],
    );
  }

  _buildArc(double angle, {Color color, int totalSteps, int currentFill}) {
    final double rad = radians(angle);
    return Transform(
      transform: Matrix4.identity()
        ..translate(
          1 * cos(rad),
          (1) * sin(rad),
        ),
      child: Transform.rotate(
        angle: angle,
        child: CircularStepProgressIndicator(
          totalSteps: totalSteps,
          currentStep: currentFill,
          stepSize: 9,
          startingAngle: 0,
          arcSize: ((pi * ((2 / 3) * .93))),
          selectedColor: color,
          unselectedColor: Colors.grey[200],
          padding: 0,
          height: MediaQuery.of(context).size.height * .4,
          width: MediaQuery.of(context).size.height * .4,
          selectedStepSize: MediaQuery.of(context).size.height * .025,
          roundedCap: (_, __) => true,
        ),
      ),
    );
  }
}
