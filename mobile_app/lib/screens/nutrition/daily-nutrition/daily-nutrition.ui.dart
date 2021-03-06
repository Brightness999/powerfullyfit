import 'package:flutter/material.dart';
import 'package:mobile_app/screens/display-pdf-screen/display-pdf-screen.ui.dart';
import 'package:mobile_app/screens/nutrition/macros-list/macros-list.ui.dart';
import 'package:mobile_app/widgets/buttons/return_summary.button.dart';
import 'package:mobile_app/widgets/cards/daily-nutrition-goal.card.dart';
import 'package:mobile_app/widgets/charts/arc.chart.dart';
import 'package:mobile_app/widgets/buttons/primary_button.dart';
import 'package:mobile_app/widgets/labels/nutrition_labels.dart';

class DailyNutritionScreen extends StatelessWidget {
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: ReturnSummaryButton(),
        title: Text(
          "Daily Nutrition",
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.height * .01,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                margin: EdgeInsets.symmetric(
                  vertical: 15,
                ),
                child: ArcChart(),
              ),
              Container(
                child: NutritionLabels(),
              ),
              Container(
                margin: EdgeInsets.symmetric(
                  vertical: 20,
                ),
                child: DailyNutrition(),
              ),
              PrimaryButton(
                margin: EdgeInsets.only(
                  bottom: 30,
                ),
                onPressed: () => Navigator.push(
                  context,
                  MaterialPageRoute<dynamic>(
                    builder: (_) => const PDFViewerFromUrl(
                      url: 'http://africau.edu/images/default/sample.pdf',
                    ),
                  ),
                ),
                child: Center(
                  child: Text(
                    'Nutrition Guide',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 28,
                    ),
                  ),
                ),
              ),
              PrimaryButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (BuildContext context) {
                      return MacrosListScreen();
                    }),
                  );
                },
                child: Center(
                  child: Text(
                    'View Meals',
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
      ),
    );
  }
}
