import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';
import 'package:mobile_app/widgets/charts/line.chart.dart';

class ProgressScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
        title: Text(
          'My Progress',
        ),
      ),
      body: Container(
        padding: const EdgeInsets.symmetric(
          horizontal: 5,
        ),
        child: ListView(
          children: <Widget>[
            SizedBox(
              height: 5,
            ),
            PrimaryCard(
              child: LineChartSample1(),
            ),
            SizedBox(
              height: 20,
            ),
            PrimaryButton(
              onPressed: () {},
              child: Center(
                child: Text(
                  'UPDATE PROGRESS',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 28,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
