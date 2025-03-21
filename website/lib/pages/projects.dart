import 'package:flutter/material.dart';
import 'package:youtube_player_iframe/youtube_player_iframe.dart';
import 'dart:math';
import 'package:url_launcher/url_launcher.dart';
import 'params.dart';
import 'dart:ui';

// RingSenseのページ
class ProjectRingsense extends StatelessWidget {
  // Localeを受け取る
  final Locale locale;
  late final Params params;
  ProjectRingsense({Key? key, required this.locale}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    params = Params(context);

    final videoId = 'https://www.youtube.com/watch?v=123456';
    final fixwidth = params.getFixwidth();
    final padHeight = params.getPadHeight();
    final title = locale.languageCode == 'ja' ? 'RingSense' : 'RingSense';
    final description = locale.languageCode == 'ja'
        ? 'スマートフォンが普及して久しいが，依然として指でタッチスクリーンを操作する際に生じるファットフィンガー問題による誤操作や片手操作では画面全体に指が届かないという問題はスマートフォンの操作を困難にしている．これらの問題を扱う研究は多く，特にスマートフォン上での操作性の向上だけでなく外部デバイスを活用したインタラクション領域の拡張に取り組む研究も多い．本稿では，現在スマートフォンのアクセサリとして人気のあるスマホリングに着目し，スマートフォン背面領域のインタラクションを実現するスマホリング型ジェスチャインタフェースを提案する．我々はまず，スマホリングの利用方法を明らかにするためにクラウドソーシングで300名のスマホリング利用者からスマホリングの利用形態を調査した．続いて，ユーザ定義型ジェスチャの方法論で20人の参加者へ聞き取り調査を行いスマホリングの最適なジェスチャを設計した．最後に，圧力センサを用いたスマホリング型デバイスであるRingSenseを開発し，10名のデータを機械学習モデルのCNNを用いたジェスチャ分類器で解析したところ，92.7%の分類精度であった．'
        : 'We present RingSense, a phone ring-holder-style device equipped with eight pressure sensors for back-of-device (BoD) interaction on smartphones. The phone ring holder is a ring-type smartphone accessory attached to the back of the smartphone, and RingSense can be easily affixed to the smartphone, similar to a standard smartphone accessory. RingSense serves as both a smartphone input device and a safety accessory for fall prevention. To develop RingSense, we first conducted a gesture elicitation study and created a user-defined gesture set for the phone ring holder. Next, we prototyped RingSense using 8 pressure sensors and a machine-learning-based gesture classification system. We then evaluated our system using the gesture data from 10 participants. Consequently, our system achieved 92.7\% accuracy for within-user validation and showed the feasibility of gesture classification by our approach. Finally, we demonstrated some potential applications of RingSense.';
    final publications = [
      {
        'publication':
            'Kan Kusakabe, Daisuke Sakamoto, Tetsuo Ono. 2025. RingSense: A Phone Ring-Holder-Style Device Equipped with Pressure Sensors for Back-of-Device Interaction on Smartphones. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI ’21). Association for Computing Machinery, New York, NY, USA, Article 579, 1–13. DOI:https://doi.org/10.1145/3411764.3445580',
        'doi': 'https://doi.org/10.1145/3411764.3445580'
      },
      {
        'publication':
            'Kazuki Takashima, Yuta Sugiura, and Masahiko Inami. 2021. RingSense: A Phone Ring-Holder-Style Device Equipped with Pressure Sensors for Back-of-Device Interaction on Smartphones. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (CHI ’21). Association for Computing Machinery, New York, NY, USA, Article 579, 1–13. DOI:https://doi.org/10.1145/3411764.3445580',
        'doi': 'https://doi.org/10.1145/3411764.3445580'
      },
    ];
    return Scaffold(
      appBar: AppBar(
        // _localeで言語を判別してタイトルを変更
        title: Text(title),
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          return SingleChildScrollView(
            child: Container(
              alignment: Alignment.center,
              padding: EdgeInsets.symmetric(
                  horizontal: MediaQuery.of(context).size.width * 0.04),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(height: padHeight),
                    // 16:9のアスペクト比で表示
                    params.getSumbnail('image/ringsense.png', fixwidth),
                    SizedBox(height: padHeight),
                    params.getDescriptions(description, fixwidth),
                    SizedBox(height: padHeight),
                    params.getYoutubePlayer(videoId, fixwidth),
                    SizedBox(height: padHeight),
                    params.getPublications(publications, fixwidth, padHeight),
                    SizedBox(height: 150),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

// RingSenseのページ
class ProjectGame2X extends StatelessWidget {
  // Localeを受け取る
  final Locale locale;
  late final Params params;
  ProjectGame2X({Key? key, required this.locale}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    params = Params(context);

    final fixwidth = params.getFixwidth();
    final padHeight = params.getPadHeight();
    final title = 'Game-2-X';
    final description = locale.languageCode == 'ja'
        ? 'ゲームプレイを介したコミュニケーションは，親子間の信頼関係の向上や知らない人同士のアイスブレイキングに役立つ．しかし，常に全員がルールを知っているゲームが存在するとは限らず，これはコミュニケーション機会を逃す可能性につながる．そこで本稿では，異なる種類のゲーム環境内でのプレイ内容に応じて他方のゲームの難易度を動的に変化させるシステム Game-2-X を提案する．本システムを使用することで，各ユーザは自身の得意とするゲームで遊びながら，他方のプレイヤのゲームとの接続が可能となり，これまで交えることが難しかった異種ゲームでのコミュニケーションを実現する．Game-2-X の初期段階として，本稿では特に，ボードゲームに焦点を絞った実装を行い，特定のボードゲーム間の接続を実際にデモンストレーション発表する．'
        : 'Communication through gameplay can help improve trust between parents and children and break the ice between strangers. However, not everyone is always familiar with the rules of a game, which can lead to missed communication opportunities. To address this issue, we propose Game-2-X, a system that dynamically adjusts the difficulty of one game based on the gameplay of another game in different game environments. By using this system, each user can play their favorite game while connecting with other players in different games, enabling communication in heterogeneous games that was previously difficult to achieve. As an initial step for Game-2-X, we focus on implementing board games and demonstrate the connection between specific board games.';
    final publications = [
      {
        'publication':
            '日下部完, 阿部優樹, 坂本大介, 小野哲雄. 第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS 2023）. 日本ソフトウェア科学会, 1-A03, 2023年11月.',
        'doi': 'https://www.wiss.org/WISS2023Proceedings/data/1-A03.pdf'
      },
    ];
    return Scaffold(
      appBar: AppBar(
        // _localeで言語を判別してタイトルを変更
        title: Text(title),
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          return SingleChildScrollView(
            child: Container(
              alignment: Alignment.center,
              padding: EdgeInsets.symmetric(
                  horizontal: MediaQuery.of(context).size.width * 0.04),
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(height: padHeight),
                    // 16:9のアスペクト比で表示
                    params.getSumbnail('image/game2X.png', fixwidth),
                    SizedBox(height: padHeight),
                    params.getDescriptions(description, fixwidth),
                    SizedBox(height: padHeight),
                    params.getPublications(publications, fixwidth, padHeight),
                    SizedBox(height: 150),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
