import 'package:flutter/material.dart';
import 'package:material_floating_search_bar/material_floating_search_bar.dart';
import 'package:mobile_app/widgets/cards/chat.card.dart';

class ChatListScreen extends StatelessWidget {
  final controller = FloatingSearchBarController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        title: Text('Inbox'),
        actions: [
          IconButton(
            icon: Icon(Icons.add),
            onPressed: () {},
          )
        ],
      ),
      body: Stack(
        fit: StackFit.expand,
        children: [
          SingleChildScrollView(
            child: Column(
              children: [
                ChatCard(),
                SizedBox(
                  height: 10,
                ),
                ChatCard(),
                SizedBox(
                  height: 10,
                ),
                ChatCard(),
                SizedBox(
                  height: 10,
                ),
                ChatCard(),
                SizedBox(
                  height: 10,
                ),
                ChatCard(),
                SizedBox(
                  height: 10,
                ),
                ChatCard(),
                SizedBox(
                  height: 10,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
