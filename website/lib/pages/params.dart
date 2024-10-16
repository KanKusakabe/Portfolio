import 'dart:math';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter/material.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';

class Params {
  late final double fixwidth;
  final double padHeight = 30.0, fontSize = 20;
  Params(BuildContext context) {
    fixwidth = MediaQuery.of(context).size.width * 0.7;
  }
  double getFixwidth() {
    return fixwidth;
  }

  double getPadHeight() {
    return padHeight;
  }

  double getFontSize() {
    return fontSize;
  }

  Container getSumbnail(String path, double fixwidth) {
    return Container(
      width: fixwidth,
      height: fixwidth * 9 / 16,
      child: Image.asset(path),
    );
  }

  Container getDescriptions(String text, double fixwidth) {
    return Container(
      width: fixwidth,
      child: SelectableText(
        text,
        textAlign: TextAlign.left,
        style: TextStyle(
          fontSize: min(max(fixwidth * 0.024, 5), 20),
        ),
      ),
    );
  }

  Container getYoutubePlayer(String videoId, double fixwidth) {
    final uri = Uri.parse(videoId);
    final id =
        (uri.queryParameters.containsKey('v')) ? uri.queryParameters['v']! : '';
    if (id == '') {
      return Container();
    }
    return Container(
      width: fixwidth,
      height: fixwidth * 9 / 16,
      child: YoutubePlayerIFrame(
        controller: YoutubePlayerController(
          initialVideoId: id,
          params: YoutubePlayerParams(
            showControls: true,
            showFullscreenButton: true,
          ),
        ),
      ),
    );
  }

  Column getPublications(List publications, double fixwidth, double padHeight) {
    return Column(
      children: publications
          .map(
            (publication) => Container(
              width: fixwidth,
              // 左寄せにする
              alignment: Alignment.centerLeft,
              child: Column(
                // 左寄せにする
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SelectableText(
                    publication['publication'],
                    style: TextStyle(
                      fontSize: min(max(fixwidth * 0.025, 11), 17),
                    ),
                  ),
                  InkWell(
                    child: SelectableText(
                      'DOI: ${publication['doi']}',
                      style: TextStyle(
                        color: Colors.blue,
                        decoration: TextDecoration.underline,
                        fontSize: min(max(fixwidth * 0.02, 11), 17),
                      ),
                    ),
                    onTap: () => launchUrl(Uri.parse(publication['doi'])),
                  ),
                  SizedBox(height: padHeight),
                ],
              ),
            ),
          )
          .toList(),
    );
  }
}
