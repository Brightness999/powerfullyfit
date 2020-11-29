import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';
import 'package:step_progress_indicator/step_progress_indicator.dart';
import 'package:table_calendar/table_calendar.dart';

class CalendarCard extends StatelessWidget {
  final String title;
  final CalendarController calendarController;

  CalendarCard({this.calendarController, this.title});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (title != null)
          Container(
            margin: EdgeInsets.only(
                bottom: MediaQuery.of(context).size.height * .01),
            child: Text(
              title,
              style: TextStyle(
                color: Colors.white,
                fontSize: 25,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            PrimaryCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    padding: EdgeInsets.only(
                      // right: MediaQuery.of(context).size.height * .01,
                      // left: MediaQuery.of(context).size.height * .01,
                      top: MediaQuery.of(context).size.height * .02,
                    ),
                    child: Center(
                      child: TableCalendar(
                        calendarController: calendarController,
                        daysOfWeekStyle: DaysOfWeekStyle(
                          weekdayStyle: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        calendarStyle: CalendarStyle(
                          weekdayStyle: TextStyle(
                            color: Colors.white,
                          ),
                          selectedColor: appBrown,
                        ),
                        headerStyle: HeaderStyle(
                          formatButtonTextStyle: TextStyle(
                            color: Colors.white,
                          ),
                          titleTextStyle: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        headerVisible: false,
                        initialCalendarFormat: CalendarFormat.week,
                        availableCalendarFormats: const {
                          CalendarFormat.week: "Week"
                        },
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ],
    );
  }
}
