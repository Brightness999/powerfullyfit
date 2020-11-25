import 'package:adv_fab/adv_fab.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/subjects.dart';

import 'menu-item.dart';
import 'package:mobile_app/screens/home/home_screen.state.dart';

class AppMenu extends StatelessWidget {
  final AdvFabController mabialaFABController;
  final BehaviorSubject stateStream;

  AppMenu({
    this.mabialaFABController,
    this.stateStream,
  });

  @override
  Widget build(BuildContext context) {
    return AdvFab(
      showLogs: true,
      onPannelTapped: () {
        print('onPannelTapped');
        mabialaFABController.collapseFAB();
      },
      onFloatingActionButtonTapped: () {
        mabialaFABController.setExpandedWidgetConfiguration(
          showLogs: true,
          heightToExpandTo: 80,
          expendedBackgroundColor: Colors.grey[600].withOpacity(
            .7,
          ),
          withChild: Padding(
            padding: const EdgeInsets.all(
              2.0,
            ),
            child: Container(
              width: (MediaQuery.of(context).size.width),
              height: (MediaQuery.of(context).size.height / 100) * 20,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Expanded(
                    flex: 6,
                    child: Column(
                      children: [
                        Expanded(
                          child: Wrap(
                            direction: Axis.horizontal,
                            runAlignment: WrapAlignment.spaceEvenly,
                            spacing: 9.0,
                            runSpacing: 10.0,
                            children: [
                              MenuItem(
                                name: 'Workouts',
                                icon: Icons.fitness_center,
                                onPressed: () {
                                  stateStream.add(screenState.WorkoutList);
                                  mabialaFABController.collapseFAB();
                                },
                              ),
                              MenuItem(
                                name: 'Nutrition',
                                icon: Icons.emoji_food_beverage_sharp,
                                onPressed: () {
                                  stateStream.add(screenState.Education);
                                  mabialaFABController.collapseFAB();
                                },
                              ),
                              MenuItem(
                                name: 'Inbox',
                                icon: Icons.chat,
                                onPressed: () {
                                  stateStream.add(screenState.Education);
                                  mabialaFABController.collapseFAB();
                                },
                              ),
                              MenuItem(
                                name: 'Education',
                                icon: Icons.school,
                                onPressed: () {
                                  stateStream.add(screenState.Education);
                                  mabialaFABController.collapseFAB();
                                },
                              ),
                              MenuItem(
                                name: 'Comunity',
                                icon: Icons.people,
                                onPressed: () {
                                  stateStream.add(screenState.CommunityBoard);
                                  mabialaFABController.collapseFAB();
                                },
                              ),
                              MenuItem(
                                name: 'Progress',
                                icon: Icons.bar_chart,
                                onPressed: () {
                                  stateStream.add(screenState.Progress);
                                  mabialaFABController.collapseFAB();
                                },
                              ),
                              MenuItem(
                                name: 'Help',
                                icon: Icons.bar_chart,
                                onPressed: () {
                                  stateStream.add(screenState.Progress);
                                  mabialaFABController.collapseFAB();
                                },
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
        mabialaFABController.isCollapsed
            ? mabialaFABController.expandFAB()
            : mabialaFABController.collapseFAB();
      },
      floatingActionButtonIcon: Icons.menu,
      floatingActionButtonIconColor: Color(0xff99755A),
      floatingActionButtonExpendedWidth:
          (MediaQuery.of(context).size.width) * .22,
      collapsedColor: Color(0xff22272c),
      useAsFloatingActionButton: true,
      controller: mabialaFABController,
      animationDuration: Duration(milliseconds: 300),
    );
  }
}
