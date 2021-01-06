import 'package:mobile_app/entities/organization.entity.dart';
import 'package:mobile_app/entities/workout.entity.dart';
import 'package:mobile_app/repositories/backend.proxy.dart';

class WorkoutRepository {
  static String segment = '/workout/';

  static Stream<Workout> findWorkoutById(int workoutId) async* {
    yield Workout.fromJson(await BackendProxy.get(
        WorkoutRepository.segment + workoutId.toString()));
  }
}
