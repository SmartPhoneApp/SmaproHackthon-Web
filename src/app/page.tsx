export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24 bg-white">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          src="/pc-picture.jpg"
          alt="ハッカソン会場の様子"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

        {/*画像の上*/}
        <div className="relative z-10 text-center text-white">
          <p className="text-2xl mb-4 font-bold">ハッカソン開催決定！</p>
          <h1
            className="text-6xl font-bold mb-6"
            style={{ WebkitTextStroke: "2px white" }}
          >
            S M A P R O<br />H A C K T H O N<br />
            FY 2025
          </h1>
          <p className="text-2xl mb-4">2月5日～2月6日</p>
          <p className="text-lg mb-8">
            申込期間2024年10月30日 12:30分〜2024年11月08日（定員に達し次第終了）
          </p>
          <a
            href="https://docs.google.com/forms/d/1H7bgmfPYAzJIbN_uPfzDrvEaP0uWOxC4In_QsFyV_oY/edit"
            className="inline-block bg-white hover:bg-slate-200 text-gray-700 font-bold py-4 px-9 rounded-full text-l transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            応募はこちら
          </a>
        </div>
      </div>

      {/*本文*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h1 className="text-4xl font-bold mb-12">​スマプロハッカソンとは</h1>
        <p className="text-lg text-gray-600">
          スマプロハッカソンとは金沢工業大学生を対象とした
          <br />
          オフラインハッカソンです
          <br />
          <br />
          ハッカソンとは、エンジニアが集まって協力しながら
          <br />
          開発を行うイベントのことです
          <br />
          <br />
          私たちは、このイベントを通して、
          <br />
          石川県のエンジニア学生同士がつながる場所やコンテンツを提供し、
          <br />
          エンジニアを目指す学生のスキルアップや同じ志を持つ学生と出会い、
          <br />
          切磋琢磨する環境を作っていきたいと考えています
          <br />
          <br />
          そのため、エンジニアを目指す人、プログラミングに興味がある人、
          <br />
          レベルや開発経験問わず大歓迎です！！
        </p>
      </div>

      {/* 特徴 */}
      <div className="w-screen bg-gray-900 py-10 mt-20 mb-10 overflow-x-hidden">
        <div className="max-w-[800px] mx-auto text-center px-4">
          <h2 className="text-3xl text-white font-bold mt-10 mb-12">特徴</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">スキルアップ</h3>
              <p className="text-gray-600">
                短時間でプロダクトを開発するため、エンジニアとしてスキルアップができる
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">メンターサポート</h3>
              <p className="text-gray-600">
                社会人のエンジニアの方に
                <br />
                メンターをしてもらえ、教えてもらえる
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">ネットワーキング</h3>
              <p className="text-gray-600">
                エンジニアを目指す学生と知り合い、
                <br />
                つながることができる
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">ポートフォリオ</h3>
              <p className="text-gray-600">
                インターンや選考で提出する
                <br />
                成果物・ポートフォリオがつくれる
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*全体の流れ*/}
      <div className="w-full max-w-[800px] text-center mt-5 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">全体の流れ</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <p className="text-lg text-gray-700">
            10/30(水) ~<br></br> 11/08(金)
          </p>
          <p className="text-lg text-gray-700">11/13(水)</p>
          <p className="text-lg text-gray-700">2/5(日)</p>
        </div>
        <img
          src="/schedule.png"
          alt="スケジュール画像"
          className="mx-auto mb-4 rounded-lg max-w-full h-auto"
        />
        <div className="grid grid-cols-3 gap-4 mb-4">
          <p className="text-lg text-gray-700">募集期間</p>
          <p className="text-lg text-gray-700">事前説明会</p>
          <p className="text-lg text-gray-700">ハッカソン当日</p>
        </div>

        {/* 事前説明会 */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-[100vw] bg-gray-900 py-20 mt-20 mb-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-5 text-center text-white">
              事前説明会
            </h2>
            <div className="border-2 border-black bg-white overflow-hidden">
              <div className="divide-y-2 divide-black">
                <div className="flex">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-white">
                    17:30 ~ 17:40
                  </div>
                  <div className="w-2/3 py-4 px-2 text-center bg-white">
                    概要説明
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-white">
                    17:40 ~ 17:50
                  </div>
                  <div className="w-2/3 py-4 px-2 text-center bg-white">
                    当日の説明
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-white">
                    18:20 ~ 19:10
                  </div>
                  <div className="w-2/3 py-4 px-2 text-center bg-white">
                    オンライン座談会
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/3 py-4 px-2 font-semibold text-center border-r-2 border-black bg-white">
                    19:10
                  </div>
                  <div className="w-2/3 py-4 px-2 text-center bg-white">
                    閉会
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*オンライン座談会とは*/}
        <div className="w-full max-w-[800px] text-center mt-24 px-4">
          <h2 className="text-3xl font-bold mb-6">オンライン座談会</h2>
          <p className="text-lg text-gray-700 mb-8">
            オンライン座談会とは、参加者とメンターが話しやすい
            <br />
            関係を築くことを目的とした交流会です
            <br />
            <br />
            技術的な質問やキャリアに関する話題はもちろん、
            <br />
            ハッカソン以外のことでも、自由に質問できる質疑応答形式の
            <br />
            座談会となっています
            <br />
            <br />
            本オンライン座談会は、ハッカソンの事前説明会の
            <br />
            一環として実施されます
            <br />
            ぜひご参加ください！
          </p>
        </div>
      </div>

      {/* スケジュール */}
      <div className="w-full bg-gray-900 py-16 mt-20 mb-10">
        <div className="max-w-[1000px] mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-12 text-white">スケジュール</h2>
          <div className="flex flex-col md:flex-row gap-8 mb-10 justify-center items-start">
            {/* 1日目 */}
            <div className="w-[450px] mx-auto">
              <h3 className="text-2xl text-white font-bold mb-6 text-center">
                1日目 2月5日(木)
              </h3>
              <div className="border-2 border-black bg-white overflow-hidden">
                <div className="divide-y-2 divide-black">
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      09:30~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      受付開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      10:00~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      開会・オープニング
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      10:30~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      開発開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      12:30~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      昼食
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      13:30~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      開発時間
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      17:40~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      終了セッション
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      18:00
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      解散
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2日目 */}
            <div className="w-[450px] mx-auto">
              <h3 className="text-2xl text-white font-bold mb-6 text-center">
                2日目 2月6日(金)
              </h3>
              <div className="border-2 border-black bg-white overflow-hidden">
                <div className="divide-y-2 divide-black">
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      09:30~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      受付開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      10:00~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      開会・事務局案内
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      10:10~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      開発開始
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      12:30~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      昼食
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      13:30~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      開発時間
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      14:30~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      開発締め切り&発表準備
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      15:00~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      発表
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      16:10~
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      発表終了&休憩
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      16:40
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      情報交流会
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      17:30
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      順位発表・表彰式
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      17:45
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      メンターによるフィードバック
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      18:15
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      写真撮影
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      18:30
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      閉会式
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      18:45
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      片付け
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-6 py-4 font-semibold text-center border-r-2 border-black bg-white">
                      19:00
                    </div>
                    <div className="w-2/3 px-6 py-4 text-center bg-white">
                      解散
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*開催概要*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h2 className="text-3xl font-bold mb-12">開催概要</h2>
        <div className="text-left space-y-8">
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">開催日</h3>
            <p className="text-gray-600">2025年2月5日(木)〜2月6日(金)</p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">開催場所</h3>
            <p className="text-gray-600">金沢工業大学 31号館 207</p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">定員</h3>
            <p className="text-gray-600">
              20名（先着順／定員に達し次第、締切）
            </p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-500">
            <h3 className="text-xl font-semibold mb-2">参加費</h3>
            <p className="text-gray-600">無料</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">参加条件</h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>金沢工業大学の学生であること</li>
              <li>プログラミングやエンジニアに興味があること</li>
              <li>PCを持っていること</li>
              <li>2日間オフライン参加できること</li>
              <li>レベルは問いません。初心者歓迎！</li>
            </ul>
          </div>
        </div>
      </div>

      {/*協賛企業*/}
      <div className="w-full bg-gray-900 text-center mt-32 px-4">
        <h2 className="text-3xl text-white font-bold mt-5">協賛企業</h2>
        <p className="text-lg text-gray-200 mt-2 mb-5">合同会社DMM.com</p>
        <div className="flex justify-center items-center bg-gray-900 rounded-lg py-6 mb-10 mx-auto max-w-[400px]">
          <img
            src="/DMM_com_logo_RGB_white.png"
            alt="DMM.com"
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/*スマプロ*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h2 className="text-3xl font-bold mb-10">
          スマートフォンアプリ開発プロジェクト
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start text-left">
          <div className="flex justify-center items-center py-0 mx-auto md:mx-0 max-w-[200px] w-full md:w-[200px]">
            <img
              src="/Smapro_logo_RGB_white.png"
              alt="Smapro"
              className="h-36 w-auto"
            />
          </div>
          <div className="md:ml-8 flex-1">
            <p className="text-lg text-gray-700 mt-4">
              スマプロは金沢工業大学の学生によるアプリ開発プロジェクトです。
              <br />
              学生同士で協力し、様々なアプリやサービスを企画・開発しています。
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full bg-gray-900 mt-20 mb-20">
        <div className="max-w-[800px] mx-auto text-center px-4 py-12">
          <h2 className="text-3xl font-bold mb-12 text-white">よくある質問</h2>
          <div className="space-y-6 text-left">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                初心者でも参加して大丈夫ですか？
              </h3>
              <p className="text-gray-600">
                初心者の方でも楽しめるのでぜひご参加ください！メンターのサポートもあります。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                個人ですが、チーム参加はできますか？
              </h3>
              <p className="text-gray-600">
                可能です。運営側でチーム編成を行いますので、個人参加でもチーム開発ができます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3">
                事前開発はしてもいいですか？
              </h3>
              <p className="text-gray-600">
                事前説明会終了後から事前開発はしていただいて大丈夫です！
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*お問い合わせ*/}
      <div className="w-full max-w-[800px] text-center mt-20 mb-16 px-4">
        <h2 className="text-3xl font-bold mb-12">お問い合わせ</h2>
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-lg mb-4">以下のメールアドレスまでご連絡ください</p>
          <a
            href="mailto:smartphone.apps.project@gmail.com"
            className="text-blue-600 text-xl font-semibold hover:underline"
          >
            smartphone.apps.project@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
