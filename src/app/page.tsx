export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          src="/pc-picture.jpg"
          alt="ハッカソン会場の様子"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
        
        {/*画像の上*/}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            スマプロハッカソン2025
          </h1>
          <p className="text-2xl mb-4">
            2月日～2月日
          </p>
          <p className="text-lg mb-8">
            申込期間
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
        <h1 className="text-4xl font-bold mb-12">
          ​スマプロハッカソンとは
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          スマプロハッカソンとは金沢工業大学生を対象とした<br/>オフラインハッカソンです<br/>
          <br/>
          ハッカソンとは、エンジニアが集まって協力しながら<br/>開発を行うイベントのことです<br/>
          <br/>
          私たちは、このイベントを通して、<br/>石川県のエンジニア学生同士がつながる場所やコンテンツを提供し、<br/>エンジニアを目指す学生のスキルアップや同じ志を持つ学生と出会い、<br/>切磋琢磨する環境を作っていきたいと考えています<br/>
          <br/>
          そのため、エンジニアを目指す人、プログラミングに興味がある人、<br/>レベルや開発経験問わず大歓迎です！！
        </p>
      </div>

      {/*特徴*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h2 className="text-3xl font-bold mb-12">特徴</h2>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">スキルアップ</h3>
            <p className="text-gray-600 dark:text-gray-300">
              短時間でプロダクトを開発するため、エンジニアとしてスキルアップができる
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">メンターサポート</h3>
            <p className="text-gray-600 dark:text-gray-300">
              社会人のエンジニアの方にメンターをしてもらえ、教えてもらえる
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">ネットワーキング</h3>
            <p className="text-gray-600 dark:text-gray-300">
              エンジニアを目指す学生と知り合い、つながることができる
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">ポートフォリオ</h3>
            <p className="text-gray-600 dark:text-gray-300">
              インターンや選考で提出する成果物・ポートフォリオがつくれる
            </p>
          </div>
        </div>
      </div>

      {/*スケジュール*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h2 className="text-3xl font-bold mb-12">スケジュール</h2>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">1日目 2月日(月)</h3>
            <div className="text-left space-y-2">
              <p><span className="font-semibold">09:30~</span> 受付開始</p>
              <p><span className="font-semibold">10:00~</span> オープニング</p>
              <p><span className="font-semibold">10:30~</span> 開発開始</p>
              <p><span className="font-semibold">12:30~</span> 昼食</p>
              <p><span className="font-semibold">13:30~</span> テーマ発表</p>
              <p><span className="font-semibold">14:00~</span> 開発再開</p>
              <p><span className="font-semibold">17:40</span> 終了セッション</p>
              <p><span className="font-semibold">18:00</span> 解散</p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">2日目 2月日(火)</h3>
            <div className="text-left space-y-2">
              <p><span className="font-semibold">09:30~</span> 受付開始</p>
              <p><span className="font-semibold">10:00~</span> 開会・事務局案内</p>
              <p><span className="font-semibold">10:10~</span> 開発開始</p>
              <p><span className="font-semibold">12:30~</span> 昼食</p>
              <p><span className="font-semibold">14:00~</span> 発表準備</p>
              <p><span className="font-semibold">14:30~</span> 開発ストップ</p>
              <p><span className="font-semibold">15:00~</span> 発表プレゼン</p>
              <p><span className="font-semibold">16:30~</span> 審査結果発表・表彰</p>
              <p><span className="font-semibold">17:00</span> 閉会・解散</p>
            </div>
          </div>
        </div>
      </div>

      {/*開催概要*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h2 className="text-3xl font-bold mb-12">開催概要</h2>
        <div className="text-left space-y-8">
          <div className="pb-8 border-b border-dashed border-gray-300 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2">開催日</h3>
            <p className="text-gray-600 dark:text-gray-300">2025年2月3日(月)〜2月4日(火)</p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-300 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2">開催場所</h3>
            <p className="text-gray-600 dark:text-gray-300">金沢工業大学（詳細は後日発表）</p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-300 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2">定員</h3>
            <p className="text-gray-600 dark:text-gray-300">20名（先着順／定員に達し次第、締切）</p>
          </div>
          <div className="pb-8 border-b border-dashed border-gray-300 dark:border-gray-600">
            <h3 className="text-xl font-semibold mb-2">参加費</h3>
            <p className="text-gray-600 dark:text-gray-300">無料</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">参加条件</h3>
            <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
              <li>金沢工業大学の学生であること</li>
              <li>プログラミングやエンジニアに興味があること</li>
              <li>PCを持っていること</li>
              <li>2日間オフライン参加できること</li>
              <li>レベルは問いません。初心者歓迎！</li>
            </ul>
          </div>
        </div>
      </div>

      {/*FAQ*/}
      <div className="w-full max-w-[800px] text-center mt-20 px-4">
        <h2 className="text-3xl font-bold mb-12">よくある質問</h2>
        <div className="space-y-6 text-left">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">初心者でも参加して大丈夫ですか？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              初心者の方でも楽しめるのでぜひご参加ください！メンターのサポートもあります。
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">個人ですが、チーム参加はできますか？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              可能です。運営側でチーム編成を行いますので、個人参加でもチーム開発ができます。
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-3">事前開発はしてもいいですか？</h3>
            <p className="text-gray-600 dark:text-gray-300">
              事前説明会終了後から事前開発はしていただいて大丈夫です！
            </p>
          </div>
        </div>
      </div>

      {/*お問い合わせ*/}
      <div className="w-full max-w-[800px] text-center mt-20 mb-16 px-4">
        <h2 className="text-3xl font-bold mb-12">お問い合わせ</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <p className="text-lg mb-4">以下のメールアドレスまでご連絡ください</p>
          <a href="mailto:smartphone.apps.project@gmail.com" className="text-blue-600 dark:text-blue-400 text-xl font-semibold hover:underline">
            smartphone.apps.project@gmail.com
          </a>
        </div>
      </div>
    </main>
  )
} 