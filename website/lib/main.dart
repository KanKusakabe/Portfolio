// reference: https://qiita.com/ampersand-dev/items/61ed134f871e7eab95ae
import 'package:flutter/material.dart';
import 'responsive_widget.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import 'pages/projects.dart';
import 'dart:math';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'pages/params.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Locale _locale = Locale('en');

  void _changeLanguage(Locale locale) {
    setState(() {
      _locale = locale;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      locale: _locale,
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: AppLocalizations.supportedLocales,
      title: _locale.languageCode == 'ja' ? '日下部 完' : 'Kan Kusakabe',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        textTheme: TextTheme(
          bodyLarge: TextStyle(
              fontFamily: 'Helvetica', fontFamilyFallback: ['Hiragino Sans']),
          bodyMedium: TextStyle(
              fontFamily: 'Helvetica', fontFamilyFallback: ['Hiragino Sans']),
        ),
      ),
      routes: {
        '/ringsense': (context) => ProjectRingsense(locale: _locale),
        '/game2x': (context) => ProjectGame2X(locale: _locale),
      },
      home: PortfolioPage(changeLanguage: _changeLanguage, locale: _locale),
    );
  }
}

class PortfolioPage extends StatefulWidget {
  final void Function(Locale) changeLanguage;
  final Locale locale;

  PortfolioPage({required this.changeLanguage, required this.locale});

  @override
  _PortfolioPageState createState() => _PortfolioPageState();
}

class _PortfolioPageState extends State<PortfolioPage> {
  final ScrollController _scrollController = ScrollController();
  final List<GlobalKey> _sectionKeys = List.generate(3, (_) => GlobalKey());
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  void _scrollToSection(int index) {
    final context = _sectionKeys[index].currentContext;
    if (context != null) {
      Scrollable.ensureVisible(
        context,
        duration: Duration(milliseconds: 500),
        curve: Curves.easeInOut,
      );
    }
    // Drawerを閉じる
    if (ResponsiveWidget.isSmallScreen(this.context)) {
      _scaffoldKey.currentState?.closeDrawer();
    }
  }

  Widget _buildContent(Locale locale) {
    return ListView(
      controller: _scrollController,
      children: [
        Section(
            key: _sectionKeys[0],
            title: locale.languageCode == 'ja' ? 'ホーム' : 'Home',
            content: HomeContent()),
        Section(
            key: _sectionKeys[1],
            title: locale.languageCode == 'ja' ? 'プロジェクト' : 'Project',
            content: ProjectContent()),
        Section(
            key: _sectionKeys[2],
            title: locale.languageCode == 'ja' ? '出版物' : 'Publication',
            content: PublicationContent()),
      ],
    );
  }

  Widget _buildNavigation(Locale locale) {
    return ResponsiveWidget(
      largeScreen: mainBuilder(locale),
      mediumScreen: mainBuilder(locale),
      smallScreen: SizedBox.shrink(),
    );
  }

  // メインのナビゲーション
  Container mainBuilder(Locale locale) {
    return Container(
      padding: EdgeInsets.all(16),
      width: MediaQuery.of(context).size.width * 0.25,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        // 左寄せ
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: MediaQuery.of(context).size.width * 0.15,
            height: MediaQuery.of(context).size.width * 0.15,
            // 画像は円形にする
            child: ClipOval(
              child: Image.asset('image/kan.png'),
            ),
          ),
          SizedBox(height: 20),
          NavLink(
              title: locale.languageCode == 'ja' ? 'ホーム' : 'Home',
              onTap: () => _scrollToSection(0)),
          NavLink(
              title: locale.languageCode == 'ja' ? 'プロジェクト' : 'Project',
              onTap: () => _scrollToSection(1)),
          NavLink(
              title: locale.languageCode == 'ja' ? '出版物' : 'Publication',
              onTap: () => _scrollToSection(2)),
          // 横向きに連絡先のアイコンを表示, アイコンはクリックするとリンク先に飛ぶ
          Row(
            children: [
              IconButton(
                icon: Icon(Icons.mail),
                onPressed: () => launchUrl(
                    Uri.parse('mailto:kusakabe.kan.v5@lems.hokudai.ac.jp')),
              ),
              IconButton(
                icon: FaIcon(FontAwesomeIcons.instagram),
                onPressed: () =>
                    launchUrl(Uri.parse('https://www.instagram.com/hci_kan/')),
              ),
              IconButton(
                // x.com
                icon: FaIcon(FontAwesomeIcons.xTwitter),
                onPressed: () => launchUrl(Uri.parse('https://x.com/HCI_kan')),
              ),
              IconButton(
                // x.com
                icon: FaIcon(FontAwesomeIcons.linkedin),
                onPressed: () => launchUrl(Uri.parse(
                    'https://www.linkedin.com/in/kan-kusakabe-a83589239/')),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildDrawer() {
    return Drawer(
      child: ListView(
        children: [
          SizedBox(height: 20),
          Container(
            // add padding to the left
            padding: EdgeInsets.only(left: 10),
            child: Align(
              alignment: Alignment.centerLeft,
              // paddingを追加
              child: Container(
                width: MediaQuery.of(context).size.width * 0.3,
                height: MediaQuery.of(context).size.width * 0.3,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  image: DecorationImage(
                    fit: BoxFit.cover,
                    image: AssetImage('image/kan.png'),
                  ),
                ),
              ),
            ),
          ),
          ListTile(
            title: Text(
              AppLocalizations.of(context)!.home,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () => _scrollToSection(0),
          ),
          SizedBox(height: 20),
          ListTile(
            // テキストをボルドにする
            title: Text(
              AppLocalizations.of(context)!.project,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () => _scrollToSection(1),
          ),
          SizedBox(height: 20),
          ListTile(
            title: Text(
              AppLocalizations.of(context)!.publication,
              style: TextStyle(fontWeight: FontWeight.bold),
            ),
            onTap: () => _scrollToSection(2),
          ),
          SizedBox(height: 20),
          // 横向きに連絡先のアイコンを表示, アイコンはクリックするとリンク先に飛ぶ
          Row(
            children: [
              IconButton(
                icon: Icon(Icons.mail),
                onPressed: () => launchUrl(
                    Uri.parse('mailto:kusakabe.kan.v5@lems.hokudai.ac.jp')),
              ),
              IconButton(
                icon: FaIcon(FontAwesomeIcons.instagram),
                onPressed: () =>
                    launchUrl(Uri.parse('https://www.instagram.com/hci_kan/')),
              ),
              IconButton(
                // x.com
                icon: FaIcon(FontAwesomeIcons.xTwitter),
                onPressed: () => launchUrl(Uri.parse('https://x.com/HCI_kan')),
              ),
              IconButton(
                // x.com
                icon: FaIcon(FontAwesomeIcons.linkedin),
                onPressed: () => launchUrl(Uri.parse(
                    'https://www.linkedin.com/in/kan-kusakabe-a83589239/')),
              ),
            ],
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final locale = Localizations.localeOf(context)!;
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        title: Text(AppLocalizations.of(context)!.title),
        actions: [
          // 言語切り替え
          TextButton(
            onPressed: () => setState(() {
              widget.changeLanguage(Locale('en'));
            }),
            child: Text('EN', style: TextStyle(color: Colors.black)),
          ),
          SelectableText("/"),
          TextButton(
            onPressed: () => setState(() {
              widget.changeLanguage(Locale('ja'));
            }),
            child: Text('JP', style: TextStyle(color: Colors.black)),
          ),
        ],
        // smallScreenの場合はDrawerを表示
        leading: ResponsiveWidget.isSmallScreen(context)
            ? IconButton(
                onPressed: () => _scaffoldKey.currentState?.openDrawer(),
                icon: Icon(Icons.menu),
              )
            : null,
      ),
      drawer: ResponsiveWidget.isSmallScreen(context) ? _buildDrawer() : null,
      body: Row(
        children: [
          if (!ResponsiveWidget.isSmallScreen(context))
            _buildNavigation(locale),
          Expanded(child: _buildContent(locale)),
        ],
      ),
    );
  }
}

class Section extends StatelessWidget {
  final String title;
  final Widget content;

  const Section({required Key key, required this.title, required this.content})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      // サイドのパディングは16, 上下は8
      padding: EdgeInsets.symmetric(
          horizontal:
              min(max(MediaQuery.of(context).size.width * 0.024, 16), 100),
          vertical: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SelectableText(title, style: Theme.of(context).textTheme.headline4),
          SizedBox(height: 16),
          content,
        ],
      ),
    );
  }
}

class NavLink extends StatelessWidget {
  final String title;
  final VoidCallback onTap;
  final double fontsize;

  const NavLink({
    Key? key,
    required this.title,
    required this.onTap,
    this.fontsize = 20.0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          EdgeInsets.symmetric(horizontal: fontsize, vertical: fontsize / 2),
      child: InkWell(
        onTap: onTap,
        child: Text(
          title,
          style: TextStyle(
            fontSize: fontsize,
            fontWeight: FontWeight.bold,
            color: Theme.of(context).primaryColor,
          ),
        ),
      ),
    );
  }
}

class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final locale = Localizations.localeOf(context)!;
    var text = locale.languageCode == 'ja'
        ? """
こんにちは、私は北海道大学の博士課程学生、日本語名は日下部寛です。
私はヒューマンコンピュータインタラクション（HCI）とユビキタスコンピューティングに興味があります。
現在、RingSenseというプロジェクトに取り組んでおり、これはユーザーの指の位置を検出できるウェアラブルデバイスです。
また、HCIの応用を医療分野にも興味があります。
出版物
"""
        : '''
hello, I am Kan Kusakabe, a Ph.D. student at Hokkaido University. 
I am interested in Human-Computer Interaction (HCI) and Ubiquitous Computing. 
I am currently working on a project called RingSense, which is a wearable device that can detect the user's finger position. 
I am also interested in the application of HCI to the field of healthcare. 
I am currently working on a project called RingSense, which is a wearable device that can detect the user's finger position. 
I am also interested in the application of HCI to the field of healthcare.
''';
    final String fontfamily =
        Theme.of(context).textTheme.bodyText1!.fontFamily!;
    // textの最後にfontfamilyを追加する
    text += fontfamily;
    return Column(
      children: [
        SizedBox(height: 20),
        SelectableText(
          text,
          style: TextStyle(
              fontSize:
                  min(max(MediaQuery.of(context).size.width * 0.024, 20), 17)),
        ),
      ],
    );
  }
}

class ProjectContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // ローカライゼーションのインスタンスを取得
    final localizations = AppLocalizations.of(context)!;
    final List<Map<String, dynamic>> projects = [
      {
        'title': 'RingSense',
        'path': '/ringsense',
        'image': 'image/ringsense.png',
      },
      {
        'title': 'Game-2-X',
        'path': '/game2x',
        'image': 'image/game2X.png',
      },
    ];
    return Column(
      children: projects
          .map(
            (project) => Column(
              children: [
                GestureDetector(
                  onTap: () {
                    Navigator.of(context).pushNamed(
                      project['path'],
                      arguments: {
                        'locale': localizations,
                      },
                    );
                  },
                  child: Row(
                    children: [
                      if (!ResponsiveWidget.isSmallScreen(context))
                        Container(
                          width: 200,
                          height: 200,
                          child: Image.asset(project['image']),
                        ),
                      if (!ResponsiveWidget.isSmallScreen(context))
                        SizedBox(width: 20),
                      Expanded(
                        child: Text(
                          project['title'],
                          style: TextStyle(
                            fontSize: min(
                                max(MediaQuery.of(context).size.width * 0.024,
                                    20),
                                25),
                          ),
                          overflow: TextOverflow.visible,
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 20),
              ],
            ),
          )
          .toList(),
    );
  }
}

class PublicationContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final locale = Localizations.localeOf(context)!;
    final params = Params(context);
    final fontsize = params.getFontSize();
    final fixwidth = params.getFixwidth();
    final padHeight = params.getPadHeight();
    // 査読付き国際会議 **********************************************************************
    final publications_peer = [
      {
        'publication':
            '日下部完, 阿部優樹, 坂本大介, 小野哲雄. 第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS 2023）. 日本ソフトウェア科学会, 1-A03, 2023年11月.',
        'doi': 'https://www.wiss.org/WISS2023Proceedings/data/1-A03.pdf'
      },
    ];
    // 査読なし国際会議 **********************************************************************
    final publications_non_peer = [];
    // 査読付き国内会議 **********************************************************************
    final publications_jp_peer = [
      {
        'publication':
            '日下部完, 阿部優樹, 坂本大介, 小野哲雄. 第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS 2023）. 日本ソフトウェア科学会, 1-A03, 2023年11月. ',
        'doi': 'https://www.wiss.org/WISS2023Proceedings/data/1-A03.pdf'
      },
    ];
    // 査読なし国内会議 **********************************************************************
    final publications_jp_non_peer = [
      {
        'publication':
            '日下部 完 , 崔 明根 , 坂本 大介 , 小野 哲雄. 無段階調整インタフェースのためのハンドジェスチャによる操作手法の探索的研究. 情報処理学会 研究報告ヒューマンコンピュータインタラクション（HCI）, 2022-HCI-197(25), 1-8, 2188-8760, 2022年3月.ロング採録（acceptance rate: 12.5%）.',
        'doi':
            'https://ipsj.ixsq.nii.ac.jp/ej/?action=repository_uri&item_id=217445'
      },
    ];

    return Column(
      // 左寄せ
      crossAxisAlignment: CrossAxisAlignment.start,

      children: [
        // 査読付き国際会議
        if (publications_peer.isNotEmpty) ...[
          SelectableText(
            locale.languageCode == 'ja'
                ? '査読付き国際会議'
                : 'Peer-reviewed international conferences',
            style: TextStyle(fontSize: fontsize),
          ),
          SizedBox(height: padHeight / 3),
          params.getPublications(publications_peer, fixwidth, padHeight),
          SizedBox(height: padHeight),
        ],

        // 査読なし国際会議
        if (publications_non_peer.isNotEmpty) ...[
          SelectableText(
            locale.languageCode == 'ja'
                ? '査読なし国際会議'
                : 'Non-peer-reviewed international conferences',
            style: TextStyle(fontSize: fontsize),
          ),
          SizedBox(height: padHeight / 3),
          params.getPublications(publications_non_peer, fixwidth, padHeight),
        ],

        // 査読付き国内会議
        if (publications_jp_peer.isNotEmpty) ...[
          SelectableText(
            locale.languageCode == 'ja'
                ? '査読付き国内会議'
                : 'Peer-reviewed domestic conferences',
            style: TextStyle(fontSize: fontsize),
          ),
          SizedBox(height: padHeight / 3),
          params.getPublications(publications_jp_peer, fixwidth, padHeight),
          SizedBox(height: padHeight),
        ],

        // 査読なし国内会議
        if (publications_jp_non_peer.isNotEmpty) ...[
          SelectableText(
            locale.languageCode == 'ja'
                ? '査読なし国内会議'
                : 'Non-peer-reviewed domestic conferences',
            style: TextStyle(fontSize: fontsize),
          ),
          SizedBox(height: padHeight / 3),
          params.getPublications(publications_jp_non_peer, fixwidth, padHeight),
        ],
      ],
    );
  }
}
