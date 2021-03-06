import 'package:expansion_tile_card/expansion_tile_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_app/entities/Exercise.entity.dart';
import 'package:mobile_app/entities/workout.entity.dart';
import 'package:mobile_app/models/workout-type.enum.dart';
import 'package:mobile_app/repositories/program.repository.dart';
import 'package:mobile_app/repositories/workout.repository.dart';
import 'package:mobile_app/theme/colors.dart';

import 'package:mobile_app/widgets/timer/timer.dart';
import 'package:video_player/video_player.dart';
import 'package:video_player_controls/video_player_controls.dart';
import 'package:flutter/services.dart';

// ignore: must_be_immutable
class WorkoutScreen extends StatefulWidget {
  @override
  _WorkoutScreen createState() => _WorkoutScreen();
}

class _WorkoutScreen extends State {
  VideoPlayerController _controller;
  Future<void> _initializeVideoPlayerFuture;

  Controller controller;

  Workout workout = Workout(
    name: "Biceps & Abs Workout",
    duration: "30 mins",
    type: WorkoutType.HIIT,
    status: 'Complete',
    exercises: [
      Exercise.example(
        name: "Bicep Curls",
        isDone: true,
      ),
      Exercise.example(
        name: "Barbell Curls",
        isDone: true,
      ),
      Exercise.example(name: "Situps"),
      Exercise.example(name: "Pushups"),
      Exercise.example(name: "Planks"),
    ],
  );

  @override
  initState() {
    super.initState();

    // WorkoutRepository.findWorkoutById(1);
    ProgramRepository.findWProgramById(1).listen((e) {
      print(e);
    });

    _controller = VideoPlayerController.network(
      'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4',
    );

    _initializeVideoPlayerFuture = _controller.initialize();

    controller = new Controller(
      items: [
        //
        new PlayerItem(
          title: 'video 1',
          url:
              'https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4',
          // subtitleUrl: "https://wecast.ch/posters/vt.vtt",
        ),
        new PlayerItem(
          startAt: Duration(seconds: 2),
          title: 'video 2',
          aspectRatio: 16 / 4,
          url:
              'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4',
          subtitleUrl: "https://wecast.ch/posters/vtt.vtt",
        ),
        new PlayerItem(
          title: 'video 3',
          aspectRatio: 16 / 9,
          url:
              'https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4',
          subtitleUrl: "https://wecast.ch/posters/vtt.vtt",
        ),
      ],
      autoPlay: true,
      errorBuilder: (context, message) {
        return new Container(
          child: new Text(message),
        );
      },
      // index: 2,
      autoInitialize: true,
      // isLooping: false,
      allowedScreenSleep: false,
      // showControls: false,
      hasSubtitles: true,
      // isLive: true,
      // showSeekButtons: false,
      // showSkipButtons: false,
      // allowFullScreen: false,
      fullScreenByDefault: false,
      // placeholder: new Container(
      //   color: Colors.grey,
      // ),
      isPlaying: (isPlaying) {
        //
        // print(isPlaying);
      },

      playerItem: (playerItem) {
        // print('Player title: ' + playerItem.title);
        // print('position: ' + playerItem.position.inSeconds.toString());
        // print('Duration: ' + playerItem.duration.inSeconds.toString());
      },
      videosCompleted: (isCompleted) {
        print(isCompleted);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GestureDetector(
        onTap: () => FocusScope.of(context).unfocus(),
        child: CustomScrollView(
          slivers: [
            SliverAppBar(
              floating: true,
              pinned: true,
              snap: false,
              backgroundColor: Colors.transparent,
              expandedHeight: MediaQuery.of(context).size.height * .27,
              flexibleSpace: FlexibleSpaceBar(
                title: Container(
                  constraints: BoxConstraints.expand(
                    height: MediaQuery.of(context).size.height * .27,
                  ),
                  alignment: Alignment.bottomLeft,
                  padding: EdgeInsets.only(
                    left: 16.0,
                    bottom: 8.0,
                  ),
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage(workout.picture),
                      fit: BoxFit.cover,
                      colorFilter: ColorFilter.mode(
                        Colors.grey[400],
                        BlendMode.multiply,
                      ),
                    ),
                  ),
                  child: Wrap(
                    children: [
                      RichText(
                        text: TextSpan(
                          children: [
                            TextSpan(
                              text: workout.name,
                              style: new TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 26.0,
                              ),
                            ),
                            TextSpan(
                              text: " - ",
                              style: new TextStyle(
                                fontSize: 26.0,
                              ),
                            ),
                            TextSpan(
                              text: workout.duration,
                              style: new TextStyle(
                                fontSize: 26.0,
                              ),
                            ),
                          ],
                        ),
                      ),
                      Row(
                        children: [
                          Container(
                            padding: EdgeInsets.all(
                              MediaQuery.of(context).size.height * .005,
                            ),
                            decoration: BoxDecoration(
                              color: Colors.black,
                              borderRadius: BorderRadius.all(
                                Radius.circular(5),
                              ),
                            ),
                            child: Text(
                              workout.type.toString().split('.').last,
                              style: new TextStyle(
                                fontSize: 17.0,
                              ),
                            ),
                          ),
                          SizedBox(
                            width: 10,
                          ),
                          Text(
                            workout.status,
                            style: new TextStyle(
                              fontSize: 17.0,
                              color: Colors.greenAccent,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
            Container(
              child: SliverList(
                delegate: SliverChildListDelegate(
                  [
                    Container(
                      margin: EdgeInsets.symmetric(vertical: 20),
                      child: WorkoutTimer(),
                    ),
                    Container(
                      margin: EdgeInsets.only(left: 16.0, bottom: 16.0),
                      child: Text(
                        "Exercises",
                        style: new TextStyle(
                            fontSize: 25.0,
                            color: Colors.white,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.symmetric(
                          horizontal: MediaQuery.of(context).size.width * .01),
                      child: Column(
                        children: [
                          ...workout.exercises.map((Exercise exercise) {
                            return Container(
                              margin: EdgeInsets.only(
                                bottom:
                                    MediaQuery.of(context).size.height * .01,
                              ),
                              child: Row(
                                children: [
                                  Expanded(
                                    child: ExpansionTileCard(
                                      baseColor: darkGrey,
                                      expandedColor: darkGrey,
                                      // key: cardA,
                                      leading: CircleAvatar(
                                        child: Icon(
                                          Icons.fitness_center,
                                        ),
                                      ),
                                      trailing: exercise.isDone
                                          ? CircleAvatar(
                                              radius: 13,
                                              backgroundColor:
                                                  Colors.greenAccent,
                                              child: Icon(
                                                Icons.check_sharp,
                                                color: Colors.black,
                                                size: 23,
                                              ),
                                            )
                                          : null,
                                      title: Text(
                                        exercise.name.toString(),
                                      ),
                                      children: <Widget>[
                                        Divider(
                                          thickness: 1.0,
                                          height: 1.0,
                                        ),
                                        if (exercise.sets != null)
                                          Column(
                                            children: new List(exercise.sets)
                                                .map(
                                                  (e) => Row(
                                                    mainAxisAlignment:
                                                        MainAxisAlignment
                                                            .spaceAround,
                                                    children: [
                                                      Align(
                                                        alignment: Alignment
                                                            .centerLeft,
                                                        child: Container(
                                                          margin:
                                                              const EdgeInsets
                                                                  .only(
                                                            bottom: 16.0,
                                                          ),
                                                          child: Text(
                                                            "Set 1 (4x12)",
                                                            style: TextStyle(
                                                              fontSize: 18,
                                                            ),
                                                          ),
                                                        ),
                                                      ),
                                                      Align(
                                                        alignment: Alignment
                                                            .centerRight,
                                                        child: Container(
                                                          width: 100,
                                                          child: TextField(
                                                            decoration:
                                                                InputDecoration(
                                                              labelText:
                                                                  "Log weight",
                                                              labelStyle:
                                                                  TextStyle(
                                                                color:
                                                                    Colors.blue,
                                                              ),
                                                            ),
                                                            keyboardType:
                                                                TextInputType
                                                                    .numberWithOptions(),
                                                            inputFormatters: <
                                                                TextInputFormatter>[
                                                              FilteringTextInputFormatter
                                                                  .digitsOnly
                                                            ],
                                                            textInputAction:
                                                                TextInputAction
                                                                    .done,
                                                          ),
                                                        ),
                                                      ),
                                                    ],
                                                  ),
                                                )
                                                .toList(),
                                          ),
                                      ],
                                    ),
                                  ),
                                  RawMaterialButton(
                                    onPressed: _showMaterialDialog,
                                    fillColor: darkGrey,
                                    child: Icon(
                                      Icons.play_arrow,
                                      size: 25.0,
                                      color: Colors.white,
                                    ),
                                    padding: EdgeInsets.all(15.0),
                                    shape: CircleBorder(
                                      side: BorderSide(
                                        width: 2,
                                        color: Colors.greenAccent,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            );
                          }).toList(),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    // Ensure disposing of the VideoPlayerController to free up resources.
    _controller.dispose();

    super.dispose();
  }

  _showMaterialDialog() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (_) => new AlertDialog(
        title: new Text("Material Dialog"),
        content: FutureBuilder(
          future: _initializeVideoPlayerFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              _controller.play();
              // If the VideoPlayerController has finished initialization, use
              // the data it provides to limit the aspect ratio of the VideoPlayer.
              return AspectRatio(
                aspectRatio: _controller.value.aspectRatio,
                // Use the VideoPlayer widget to display the video.
                child: VideoPlayer(_controller),
              );
            } else {
              // If the VideoPlayerController is still initializing, show a
              // loading spinner.
              return Center(child: CircularProgressIndicator());
            }
          },
        ),
        actions: <Widget>[
          FlatButton(
            child: Text('Close me!'),
            onPressed: () {
              Navigator.of(context).pop();
            },
          )
        ],
      ),
    );
  }
}
