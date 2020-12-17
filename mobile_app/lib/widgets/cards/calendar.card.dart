import 'package:flutter/material.dart';
import 'package:mobile_app/theme/colors.dart';
import 'package:mobile_app/widgets/cards/primary-card.ui.dart';
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
              bottom: MediaQuery.of(context).size.height * .01,
            ),
            child: Text(
              title,
              style: TextStyle(
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
                      top: MediaQuery.of(context).size.height * .02,
                    ),
                    child: Center(
                      child: TableCalendar(
                        calendarController: calendarController,
                        daysOfWeekStyle: DaysOfWeekStyle(
                          weekdayStyle: TextStyle(
                            color: Colors.white,
                          ),
                          weekendStyle: TextStyle(
                            color: Colors.white,
                          ),
                        ),
                        calendarStyle: CalendarStyle(
                          weekdayStyle: TextStyle(
                            color: Colors.white,
                          ),
                          weekendStyle: TextStyle(
                            color: Colors.white,
                          ),
                          selectedColor: lightBrown,
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
                        startingDayOfWeek: _getStartingDayOftheWeek(),
                        startDay: DateTime.utc(2020, 12, 12),
                        endDay: DateTime.utc(2020, 22, 12),
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

  StartingDayOfWeek _getStartingDayOftheWeek() {
    DateTime now = new DateTime.now();

    switch (now.weekday) {
      case 0:
        return StartingDayOfWeek.sunday;
      case 1:
        return StartingDayOfWeek.monday;
      case 2:
        return StartingDayOfWeek.tuesday;
      case 3:
        return StartingDayOfWeek.wednesday;
      case 4:
        return StartingDayOfWeek.thursday;
      case 5:
        return StartingDayOfWeek.friday;
      case 6:
        return StartingDayOfWeek.saturday;
    }

    return StartingDayOfWeek.sunday;
  }
}
