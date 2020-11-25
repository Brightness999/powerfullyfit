import 'package:flutter/material.dart';
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
          Text(
            title,
            style: TextStyle(
              color: Colors.white,
              fontSize: 25,
              fontWeight: FontWeight.bold,
            ),
          ),
        SizedBox(
          height: 20,
        ),
        Container(
          margin: EdgeInsets.only(
            bottom: MediaQuery.of(context).size.height * .03,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: EdgeInsets.only(
                  right: MediaQuery.of(context).size.height * .01,
                  left: MediaQuery.of(context).size.height * .01,
                  top: MediaQuery.of(context).size.height * .02,
                ),
                decoration: BoxDecoration(
                  color: Color(0xff22272c),
                  borderRadius: BorderRadius.all(
                    Radius.circular(25),
                  ),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    TableCalendar(
                      calendarController: calendarController,
                      calendarStyle: CalendarStyle(
                        weekdayStyle: TextStyle(
                          color: Colors.white,
                        ),
                        selectedColor: Color(0xff99755A),
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
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
