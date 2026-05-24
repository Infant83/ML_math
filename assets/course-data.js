export const routeStages = [
  {
    number: "1",
    title: "문제 설정",
    body: "특성 공간, 라벨, 가설, 손실함수, 판별모형의 역할을 먼저 정리합니다."
  },
  {
    number: "2",
    title: "기하와 최적화",
    body: "내적, 행렬, 고유분해, 그래디언트를 모델 학습의 기본 언어로 익힙니다."
  },
  {
    number: "3",
    title: "확률과 정보량",
    body: "베이즈 정리, 우도, 엔트로피, KL divergence로 예측 확률을 해석합니다."
  },
  {
    number: "4",
    title: "실습과 정리",
    body: "로지스틱 회귀, PCA 시각화, calibration까지 연결해 강의용 사례로 정리합니다."
  }
];

export const categories = [
  "전체",
  "문제설정",
  "기하",
  "최적화",
  "판별모델",
  "확률",
  "정보이론",
  "의사결정",
  "실습"
];

export const chapters = [
  {
    id: "l1-ch01",
    lecture: "Lecture 1",
    number: "01",
    category: "문제설정",
    tags: ["feature space", "hypothesis", "loss"],
    title: "머신러닝의 기초와 판별 모형 소개",
    subtitle: "데이터, 가설, 손실, 결정경계를 하나의 문제 설정으로 묶는 장",
    summary: "첫 장은 머신러닝을 수학적으로 말하기 위한 최소 어휘를 정합니다. 입력 공간과 특성 공간을 구분하고, 라벨과 가설 공간을 놓은 뒤, 손실함수가 왜 모델 선택의 기준이 되는지 설명합니다.",
    detailPath: "chapters/l1-ch01/",
    goals: [
      "입력, 특성, 라벨, 가설을 하나의 지도학습 문제로 표현한다.",
      "결정경계가 분류 문제에서 어떤 기하학적 의미를 갖는지 설명한다.",
      "판별모형이 p(y|x) 또는 결정함수를 직접 학습한다는 점을 생성모형과 구분한다."
    ],
    keyQuestions: [
      "데이터를 벡터로 표현한다는 말은 무엇을 잃고 무엇을 얻는가?",
      "좋은 모델은 정확한 함수인가, 낮은 손실을 갖는 함수인가?",
      "판별모형은 왜 데이터 생성 과정보다 경계와 조건부 예측에 집중하는가?"
    ],
    equations: [
      {
        formula: "h: X -> Y",
        note: "가설 h는 입력 공간 X의 원소를 라벨 공간 Y로 보내는 함수입니다."
      },
      {
        formula: "R(h) = E[L(h(x), y)]",
        note: "위험은 데이터 분포 위에서 손실의 기대값이며, 학습은 그 근사값을 줄이는 과정입니다."
      },
      {
        formula: "d(x) = w^T x + b",
        note: "선형 판별함수의 부호는 결정경계의 어느 쪽에 있는지를 알려줍니다."
      }
    ],
    sections: [
      {
        heading: "강의의 출발점",
        body: "이 장의 핵심은 머신러닝을 '데이터를 넣으면 답을 내는 프로그램'이 아니라 '가설 공간에서 손실이 작은 함수를 선택하는 절차'로 보는 것입니다. 이후의 선형대수와 최적화는 이 문제 설정을 계산 가능하게 만드는 도구입니다."
      },
      {
        heading: "판별적 관점",
        body: "판별모형은 데이터가 어떻게 생성되었는지를 모두 설명하려 하기보다, 주어진 x에서 y를 판단하는 경계나 조건부 확률을 직접 학습합니다. 그래서 특성 공간, 결정경계, 손실함수의 관계를 처음부터 분명히 잡는 것이 중요합니다."
      }
    ],
    delivery: [
      "날씨 예측, 스팸 분류처럼 라벨이 있는 예제로 입력과 라벨을 먼저 분리합니다.",
      "2차원 산점도 위에 직선을 그려 결정경계의 직관을 만든 뒤, 같은 직선을 수식 d(x)=w^T x+b로 바꿉니다.",
      "정확도보다 손실함수가 먼저 필요한 이유를 오분류 비용과 확률 예측 사례로 설명합니다."
    ],
    nextSteps: [
      "입력 공간, 특성 공간, 가설, 손실, 결정경계가 하나의 분류 문제에서 어떻게 이어지는지 되짚어 봅니다.",
      "같은 데이터셋에서 결정경계와 손실함수를 함께 생각하면 모델 선택 기준이 더 분명해집니다.",
      "이 장에서 쓰인 표기법이 이후 선형대수와 최적화 수식에서 어떻게 다시 등장하는지 확인합니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-1 선형대수, 미적분, 판별적모델/chapter1_introduction_lecturenote.md"],
      ["HTML", "Lecture-1 선형대수, 미적분, 판별적모델/chapter1_introduction_fixed.html"],
      ["PDF", "Lecture-1 선형대수, 미적분, 판별적모델/chapter1_introduction_lecturenote.pdf"]
    ]
  },
  {
    id: "l1-ch02",
    lecture: "Lecture 1",
    number: "02",
    category: "기하",
    tags: ["vector", "matrix", "eigen", "SVD"],
    title: "선형대수 기초와 데이터 기하",
    subtitle: "벡터와 행렬을 데이터의 위치, 방향, 변환으로 읽는 장",
    summary: "벡터, 내적, norm, 거리, 행렬과 선형변환을 머신러닝의 기하 언어로 정리합니다. 고유값, 고유벡터, 직교기저, SVD는 PCA와 저랭크 구조를 이해하기 위한 다리로 배치합니다.",
    detailPath: "chapters/l1-ch02/",
    goals: [
      "벡터의 내적을 유사도, 투영, 선형 판별의 계산으로 해석한다.",
      "행렬을 데이터의 좌표 변환 또는 특성 혼합 연산으로 설명한다.",
      "고유분해와 SVD가 차원축소와 주성분 분석으로 이어지는 이유를 말한다."
    ],
    keyQuestions: [
      "두 데이터가 비슷하다는 말을 내적과 거리로 어떻게 다르게 표현하는가?",
      "행렬은 숫자 표인가, 공간을 움직이는 함수인가?",
      "PCA가 '분산이 큰 방향'을 찾는다는 말은 어떤 선형대수 문제인가?"
    ],
    equations: [
      {
        formula: "<x, w> = x^T w",
        note: "내적은 방향 정렬 정도와 선형 점수를 동시에 표현합니다."
      },
      {
        formula: "||x||_2 = sqrt(sum_i x_i^2)",
        note: "L2 norm은 원점으로부터의 거리이며, 정규화와 거리 기반 모델의 기본 단위입니다."
      },
      {
        formula: "A v = lambda v",
        note: "고유벡터는 변환 뒤에도 방향이 유지되는 축입니다."
      },
      {
        formula: "X = U Sigma V^T",
        note: "SVD는 데이터를 직교축, 스케일, 다시 직교축으로 분해해 저랭크 근사의 기반을 만듭니다."
      }
    ],
    sections: [
      {
        heading: "데이터 기하의 언어",
        body: "머신러닝에서 데이터는 대개 숫자 벡터로 들어옵니다. 이때 내적은 모델의 점수, 거리는 샘플 간 차이, 행렬은 특성 변환, rank는 정보가 놓인 차원을 의미합니다."
      },
      {
        heading: "분해의 의미",
        body: "고유분해와 SVD는 복잡한 변환을 해석 가능한 축과 크기로 나누는 작업입니다. PCA는 이 분해를 이용해 데이터가 가장 크게 퍼지는 방향을 찾고, 그 방향으로 투영해 구조를 보존하려 합니다."
      }
    ],
    delivery: [
      "2차원 벡터 그림으로 내적, 각도, 투영을 먼저 설명합니다.",
      "행렬 곱을 '좌표를 다시 쓰는 일'로 보여준 뒤, 스케일링과 회전 예제로 연결합니다.",
      "타원형 산점도에서 주축을 찾는 시각화를 통해 고유벡터와 PCA를 연결합니다."
    ],
    nextSteps: [
      "조건수와 rank가 학습 안정성과 데이터 차원 구조를 어떻게 설명하는지 확인합니다.",
      "SVD는 이 장에서는 기하 직관으로, 6장에서는 PCA 계산 도구로 다시 읽습니다.",
      "내적, norm, 행렬곱이 실제 모델의 점수 계산에서 어디에 놓이는지 연결해 봅니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-1 선형대수, 미적분, 판별적모델/chapter2_linear_algebra_lecturenote.md"],
      ["HTML", "Lecture-1 선형대수, 미적분, 판별적모델/chapter2_linear_algebra_revised.html"]
    ]
  },
  {
    id: "l1-ch03",
    lecture: "Lecture 1",
    number: "03",
    category: "최적화",
    tags: ["gradient", "Hessian", "GD", "Newton"],
    title: "미분, 최적화 기초",
    subtitle: "손실 표면 위에서 모델 파라미터를 움직이는 방법",
    summary: "다변수 미분, 그래디언트, 야코비안, 헤시안의 의미를 정리하고 경사하강법, 모멘텀, 뉴턴법, 준뉴턴법을 학습 알고리즘의 관점에서 해석합니다.",
    detailPath: "chapters/l1-ch03/",
    goals: [
      "그래디언트를 손실이 가장 빠르게 증가하는 방향으로 해석한다.",
      "학습률, 스텝 크기, 조건수가 수렴에 미치는 영향을 설명한다.",
      "1차 방법과 2차 방법의 계산 비용과 수렴 특성을 비교한다."
    ],
    keyQuestions: [
      "왜 음의 그래디언트 방향으로 움직이면 손실이 줄어드는가?",
      "학습률이 너무 크거나 작으면 손실 표면에서 어떤 일이 벌어지는가?",
      "뉴턴법은 왜 곡률 정보를 쓰며, 왜 항상 딥러닝에서 직접 쓰이지 않는가?"
    ],
    equations: [
      {
        formula: "w_{t+1} = w_t - eta * grad L(w_t)",
        note: "경사하강법은 현재 위치의 국소 기울기를 이용해 파라미터를 갱신합니다."
      },
      {
        formula: "H_f(x) = [d^2 f / dx_i dx_j]",
        note: "헤시안은 손실 표면의 곡률을 담고, 조건수와 수렴 난이도를 설명합니다."
      },
      {
        formula: "w_{t+1} = w_t - H^{-1} grad L(w_t)",
        note: "뉴턴법은 곡률로 보정된 방향을 사용하지만, 큰 모델에서는 역행렬 계산이 부담입니다."
      }
    ],
    sections: [
      {
        heading: "미분은 국소 모델이다",
        body: "다변수 미분은 복잡한 손실함수를 현재 위치 근처에서 선형 또는 이차식으로 근사합니다. 그래디언트는 가장 가파른 방향, 헤시안은 그 방향의 굽어짐을 알려 줍니다."
      },
      {
        heading: "최적화와 학습의 연결",
        body: "머신러닝의 학습은 대부분 손실함수를 줄이는 반복 계산입니다. 경사하강법은 단순하지만 확장성이 좋고, 모멘텀은 진동을 줄이며, 뉴턴 계열은 곡률을 쓰는 대신 계산량이 큽니다."
      }
    ],
    delivery: [
      "1차원 포물선에서 시작해 2차원 contour plot으로 확장합니다.",
      "같은 손실 표면에서 학습률을 바꾸어 수렴, 진동, 발산을 비교합니다.",
      "뉴턴법은 그림으로 곡률 보정의 직관을 주고, 계산 복잡도는 표로 정리합니다."
    ],
    nextSteps: [
      "그래디언트, 야코비안, 헤시안의 입력과 출력 shape를 직접 써 보면 계산 대상이 명확해집니다.",
      "경사하강법 실습에서는 seed, 학습률, 반복 횟수, 손실 기록이 결과 해석에 어떤 영향을 주는지 확인합니다.",
      "조건수는 2장의 선형대수 개념과 연결해 손실 표면의 수렴 난이도로 다시 읽습니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-1 선형대수, 미적분, 판별적모델/chapter3_optimization_lecturenote.md"],
      ["HTML", "Lecture-1 선형대수, 미적분, 판별적모델/chapter3_optimization_lecturenote.html"],
      ["PDF", "Lecture-1 선형대수, 미적분, 판별적모델/chapter3_optimization_lecturenote.pdf"]
    ]
  },
  {
    id: "l1-ch04",
    lecture: "Lecture 1",
    number: "04",
    category: "최적화",
    tags: ["constraint", "Lagrange", "KKT", "convexity"],
    title: "제약, 볼록최적화",
    subtitle: "제약 조건이 붙은 학습 문제와 안정적인 해의 조건",
    summary: "라그랑주 승수, KKT 조건, 투영 경사하강법, 볼록집합과 볼록함수를 통해 제약이 있는 최적화 문제를 머신러닝 학습 문제로 해석합니다.",
    detailPath: "chapters/l1-ch04/",
    goals: [
      "등식/부등식 제약을 라그랑지안으로 표현한다.",
      "KKT 조건의 stationarity, feasibility, complementary slackness를 구분한다.",
      "볼록 최적화가 전역해와 알고리즘 안정성에서 갖는 장점을 이해한다."
    ],
    keyQuestions: [
      "제약 조건은 모델 학습에서 어떤 형태로 나타나는가?",
      "라그랑주 승수는 단순한 계산 기법인가, 제약의 가격인가?",
      "볼록성은 왜 최적화 문제를 다루기 쉽게 만드는가?"
    ],
    equations: [
      {
        formula: "L(x, lambda) = f(x) + lambda g(x)",
        note: "등식 제약 g(x)=0을 목적함수에 결합한 라그랑지안입니다."
      },
      {
        formula: "lambda_i g_i(x) = 0",
        note: "KKT의 complementary slackness는 활성 제약과 승수의 관계를 보여 줍니다."
      },
      {
        formula: "x_{t+1} = Proj_C(x_t - eta grad f(x_t))",
        note: "투영 경사하강법은 업데이트 뒤 feasible set으로 다시 투영합니다."
      }
    ],
    sections: [
      {
        heading: "제약은 모델의 구조다",
        body: "정규화, 확률 simplex, nonnegative parameter, margin 조건은 모두 제약 또는 제약에 가까운 구조입니다. 제약 최적화는 모델이 허용된 영역 안에서 가장 좋은 해를 찾도록 만듭니다."
      },
      {
        heading: "볼록성의 강의상 가치",
        body: "볼록 문제에서는 지역 최적해가 전역 최적해가 됩니다. 이 사실은 선형모형과 로지스틱 회귀를 먼저 가르칠 때 학습 알고리즘을 비교적 명확하게 설명할 수 있게 해 줍니다."
      }
    ],
    delivery: [
      "원 위에서 가장 낮은 점 찾기 같은 2D 예제로 제약의 직관을 만듭니다.",
      "KKT 조건은 암기 목록이 아니라 '해가 멈추는 이유'로 설명합니다.",
      "SVM margin이나 L1/L2 정규화로 제약과 ML 모델을 연결합니다."
    ],
    nextSteps: [
      "KKT 조건은 등식 제약에서 부등식 제약으로 확장되는 순서로 읽으면 부담이 줄어듭니다.",
      "볼록집합과 볼록함수의 그림을 떠올리며 지역 최적해와 전역 최적해의 차이를 확인합니다.",
      "투영 경사하강법은 simplex나 box constraint처럼 손으로 투영을 계산할 수 있는 예제로 이해합니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-1 선형대수, 미적분, 판별적모델/chapter4_Convex_Optimization_lecturenote.md"],
      ["HTML", "Lecture-1 선형대수, 미적분, 판별적모델/chapter4_convex_optimization.html"]
    ]
  },
  {
    id: "l1-ch05",
    lecture: "Lecture 1",
    number: "05",
    category: "판별모델",
    tags: ["linear regression", "regularization", "logistic regression"],
    title: "선형 모형과 분류, 회귀",
    subtitle: "선형회귀와 로지스틱 회귀를 판별모델의 기준 사례로 읽기",
    summary: "최소제곱, L1/L2 정규화, 로지스틱 회귀, 로짓, 결정경계, 평가 지표를 한 흐름으로 묶어 판별모델의 기본 작동 방식을 설명합니다.",
    detailPath: "chapters/l1-ch05/",
    goals: [
      "선형회귀의 목적함수와 정규화 항의 역할을 설명한다.",
      "로지스틱 회귀의 로짓과 확률 출력 사이의 관계를 이해한다.",
      "평가지표를 데이터 불균형과 의사결정 비용에 맞추어 선택한다."
    ],
    keyQuestions: [
      "선형모형은 단순해서 약한가, 해석 가능해서 강한가?",
      "L2 정규화는 왜 파라미터를 작게 만들며, 이것이 베이즈 관점과 어떻게 연결되는가?",
      "로지스틱 회귀의 선형 결정경계는 확률 예측과 어떻게 공존하는가?"
    ],
    equations: [
      {
        formula: "min_w ||y - Xw||_2^2 + lambda ||w||_2^2",
        note: "Ridge 회귀는 오차와 파라미터 크기를 함께 줄입니다."
      },
      {
        formula: "p(y=1|x) = sigma(w^T x + b)",
        note: "로지스틱 회귀는 선형 점수를 sigmoid로 확률화합니다."
      },
      {
        formula: "logit(p) = log(p / (1-p))",
        note: "로짓은 확률을 실수 전체의 선형 점수로 바꿔 줍니다."
      }
    ],
    sections: [
      {
        heading: "선형모형은 기준선이다",
        body: "선형모형은 복잡한 모델의 반대편에 있는 단순한 도구가 아니라, 손실, 정규화, 평가, 해석을 모두 보여 주는 기준 사례입니다. 이후 신경망도 국소적으로는 선형 변환과 비선형 활성화의 조합으로 이해할 수 있습니다."
      },
      {
        heading: "회귀에서 분류로",
        body: "선형회귀는 연속값을 예측하고, 로지스틱 회귀는 선형 점수를 확률로 변환합니다. 이 변환 덕분에 결정경계와 예측 확률을 동시에 설명할 수 있습니다."
      }
    ],
    delivery: [
      "선형회귀의 잔차 제곱합을 그림으로 보여준 뒤 정규화를 추가합니다.",
      "로짓이 0일 때 p=0.5가 되어 결정경계가 생기는 순간을 강조합니다.",
      "불균형 데이터에서 accuracy, precision, recall, ROC/AUC를 비교합니다."
    ],
    nextSteps: [
      "정규화는 2장의 norm, 4장의 제약 최적화, Lecture 2의 MAP 추정과 함께 다시 연결해 봅니다.",
      "평가지표는 먼저 혼동행렬의 실제 사례로 해석한 뒤 수식으로 돌아오면 이해가 쉽습니다.",
      "로지스틱 회귀의 확률 출력은 이후 calibration과 의사결정 문제로 이어집니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-1 선형대수, 미적분, 판별적모델/chapter5_linear_models_lecturenote.md"],
      ["HTML", "Lecture-1 선형대수, 미적분, 판별적모델/chapter5_linear_models.html"]
    ]
  },
  {
    id: "l1-ch06",
    lecture: "Lecture 1",
    number: "06",
    category: "기하",
    tags: ["PCA", "covariance", "projection", "low rank"],
    title: "차원축소와 데이터 구조 파악",
    subtitle: "PCA와 SVD로 데이터가 놓인 낮은 차원의 구조를 찾기",
    summary: "공분산, 고유분해, 투영과 재구성, SVD 관점의 저랭크 근사를 통해 차원축소가 단순 압축이 아니라 구조 해석임을 설명합니다.",
    detailPath: "chapters/l1-ch06/",
    goals: [
      "공분산 행렬에서 주성분 방향을 찾는 절차를 설명한다.",
      "투영과 재구성 오차가 차원축소의 품질을 어떻게 나타내는지 이해한다.",
      "PCA와 SVD의 관계를 데이터 행렬 관점에서 연결한다."
    ],
    keyQuestions: [
      "차원을 줄인다는 것은 정보를 버리는 일인가, 구조를 드러내는 일인가?",
      "분산이 큰 방향이 항상 예측에 좋은 방향인가?",
      "PCA 시각화는 모델 평가와 어떤 관계를 갖는가?"
    ],
    equations: [
      {
        formula: "S = (1/n) X^T X",
        note: "중심화된 데이터의 공분산 행렬은 특성 간 함께 변하는 구조를 담습니다."
      },
      {
        formula: "z = W_k^T x,  x_hat = W_k z",
        note: "PCA는 상위 k개 주성분으로 투영하고 다시 재구성합니다."
      },
      {
        formula: "min_rank-k ||X - X_k||_F",
        note: "SVD의 절단 근사는 Frobenius norm 기준 최적의 저랭크 근사입니다."
      }
    ],
    sections: [
      {
        heading: "차원축소의 목적",
        body: "차원축소는 시각화, 노이즈 제거, 압축, 구조 탐색의 도구입니다. 지도학습의 성능 개선만을 목적으로 하지 않기 때문에, 분산 보존과 예측력 보존을 구분해야 합니다."
      },
      {
        heading: "PCA의 해석",
        body: "PCA는 공분산 행렬의 고유벡터를 사용해 데이터가 가장 크게 퍼진 방향을 찾습니다. 이 방향은 데이터의 주축이지만, 라벨을 보지 않기 때문에 분류에 필요한 방향과 항상 같지는 않습니다."
      }
    ],
    delivery: [
      "타원형 산점도와 주축 그림으로 시작합니다.",
      "2D에서 1D로 투영하고 다시 복원하는 예제를 보여 줍니다.",
      "캡스톤의 PCA 시각화와 연결해 모델 평가 보조 도구로 사용합니다."
    ],
    nextSteps: [
      "PCA와 SVD의 관계는 데이터 행렬의 shape를 직접 적어 보면 혼동이 줄어듭니다.",
      "분산 설명률 그래프를 떠올리며 주성분 수 선택이 어떤 절충인지 확인합니다.",
      "PCA는 라벨을 보지 않는 비지도 방법이므로, 분산 보존과 예측력 보존을 구분해서 읽습니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-1 선형대수, 미적분, 판별적모델/chapter6_dimensionality_reduction_lecturenote.md"],
      ["HTML", "Lecture-1 선형대수, 미적분, 판별적모델/chapter6_dimensionality_reduction.html"]
    ]
  },
  {
    id: "l1-ch07",
    lecture: "Lecture 1",
    number: "07",
    category: "최적화",
    tags: ["computational graph", "backprop", "SGD", "Adam"],
    title: "연쇄 미분과 신경망의 기초",
    subtitle: "계산 그래프와 역전파를 최적화의 언어로 이해하기",
    summary: "계산 그래프, 순전파, 역전파, SGD, 미니배치, Adam을 개념 수준에서 다루며, 신경망 학습이 연쇄법칙과 확률적 최적화의 조합임을 설명합니다.",
    detailPath: "chapters/l1-ch07/",
    goals: [
      "계산 그래프를 이용해 복합함수의 forward/backward 흐름을 설명한다.",
      "역전파가 연쇄법칙을 효율적으로 재사용하는 알고리즘임을 이해한다.",
      "SGD, 미니배치, Adam의 업데이트 차이를 개념적으로 구분한다."
    ],
    keyQuestions: [
      "신경망의 학습은 왜 미분 가능한 블록의 연결로 표현되는가?",
      "역전파는 새로운 미분법인가, 계산을 조직하는 방법인가?",
      "Adam은 왜 gradient의 평균과 제곱 평균을 함께 추적하는가?"
    ],
    equations: [
      {
        formula: "dL/dx = dL/dz * dz/dx",
        note: "역전파의 핵심은 연쇄법칙을 그래프 방향의 반대로 적용하는 것입니다."
      },
      {
        formula: "w <- w - eta * grad_w L_B(w)",
        note: "미니배치 SGD는 전체 데이터 대신 배치 손실의 기울기를 사용합니다."
      },
      {
        formula: "m_t, v_t = EMA(g_t), EMA(g_t^2)",
        note: "Adam은 1차/2차 모멘트 추정으로 파라미터별 스텝을 조정합니다."
      }
    ],
    sections: [
      {
        heading: "신경망을 계산으로 읽기",
        body: "신경망은 선형변환, 비선형 함수, 손실함수의 합성입니다. 계산 그래프는 이 합성을 노드와 엣지로 표현해, 값이 앞으로 흐르고 기울기가 뒤로 흐르는 구조를 보여 줍니다."
      },
      {
        heading: "확률적 최적화",
        body: "대규모 데이터에서는 전체 손실의 정확한 그래디언트를 매번 계산하기 어렵습니다. SGD와 미니배치는 노이즈가 있는 추정 그래디언트를 사용하고, Adam은 그 노이즈와 스케일을 완화합니다."
      }
    ],
    delivery: [
      "작은 스칼라 계산 그래프에서 forward value와 backward gradient를 손으로 계산합니다.",
      "미니배치 크기를 바꿀 때 손실 곡선이 어떻게 달라지는지 보여 줍니다.",
      "Adam은 수식 전체보다 모멘트 추정과 adaptive step의 직관을 우선합니다."
    ],
    nextSteps: [
      "작은 계산 그래프 하나를 골라 forward 값과 backward gradient를 끝까지 손으로 따라가 봅니다.",
      "Adam은 bias correction 공식보다, 왜 모멘트 추정이 필요한지와 언제 조심해야 하는지를 먼저 이해합니다.",
      "네트워크 구조보다 연쇄법칙과 최적화 업데이트가 어떻게 만나는지에 초점을 둡니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-1 선형대수, 미적분, 판별적모델/chapter7_neural_networks_lecturenote.md"],
      ["HTML", "Lecture-1 선형대수, 미적분, 판별적모델/chapter7_neural_networks.html"]
    ]
  },
  {
    id: "l1-ch08",
    lecture: "Lecture 1",
    number: "08",
    category: "실습",
    tags: ["logistic regression", "ROC", "PCA", "weather"],
    title: "Capstone: 날씨 데이터 로지스틱 회귀",
    subtitle: "전처리, 분류, 평가, 시각화를 하나의 실습으로 연결하기",
    summary: "날씨 데이터를 예시로 로지스틱 회귀 모델을 만들고, ROC/AUC와 혼동행렬로 평가하며, PCA 시각화를 통해 데이터 구조와 분류 결과를 함께 봅니다.",
    detailPath: "chapters/l1-ch08/",
    goals: [
      "원천 데이터에서 모델 입력과 예측 라벨을 구성한다.",
      "로지스틱 회귀를 학습하고 분류 성능을 여러 지표로 평가한다.",
      "PCA 시각화로 데이터 구조와 모델 결과를 보조적으로 해석한다."
    ],
    keyQuestions: [
      "실습에서 수학 개념은 어디에 숨어 있는가?",
      "ROC/AUC는 어떤 임계값 선택 문제를 우회해서 보는가?",
      "PCA 그림은 분류 모델의 성능을 증명하는가, 아니면 해석을 돕는가?"
    ],
    equations: [
      {
        formula: "TPR = TP / (TP + FN)",
        note: "재현율은 실제 양성 중 모델이 잡아낸 비율입니다."
      },
      {
        formula: "FPR = FP / (FP + TN)",
        note: "거짓 양성 비율은 ROC 곡선의 x축을 구성합니다."
      },
      {
        formula: "AUC = integral TPR d(FPR)",
        note: "AUC는 임계값을 바꿔가며 얻은 순위화 성능을 요약합니다."
      }
    ],
    sections: [
      {
        heading: "캡스톤의 역할",
        body: "이 장은 앞선 수학 개념을 실제 분석 흐름 안에 배치합니다. 특성 선택은 선형대수, 학습은 최적화, 로지스틱 회귀는 판별모델, ROC는 의사결정 임계값의 문제와 연결됩니다."
      },
      {
        heading: "평가와 해석",
        body: "모델의 정확도 하나만 보는 대신, 혼동행렬, ROC/AUC, PCA 시각화를 함께 봅니다. 이때 PCA는 모델을 학습시키는 핵심 도구라기보다 데이터 구조를 설명하는 보조 렌즈입니다."
      }
    ],
    delivery: [
      "데이터 전처리, train/test split, scaling 순서를 명확히 분리합니다.",
      "예측 확률과 임계값을 나누어 설명하고, 임계값 변화가 confusion matrix에 미치는 영향을 보여 줍니다.",
      "마지막에는 어떤 수학 개념이 실습의 어느 줄에 대응되는지 표로 되돌아봅니다."
    ],
    nextSteps: [
      "예시 데이터 생성과 실제 데이터 로드가 각각 어떤 상황에서 필요한지 구분합니다.",
      "데이터 누수를 피하기 위해 scaling과 train/test split의 순서를 직접 점검합니다.",
      "실습을 시작하기 전에 코드 실행 환경과 재현 조건을 먼저 확인합니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-1 선형대수, 미적분, 판별적모델/chapter8_capstone_lecturenote.md"],
      ["HTML", "Lecture-1 선형대수, 미적분, 판별적모델/chapter8_capstone.html"]
    ]
  },
  {
    id: "l2-ch01",
    lecture: "Lecture 2",
    number: "01",
    category: "확률",
    tags: ["conditional probability", "Bayes", "MLE", "MAP"],
    title: "확률의 기초와 베이즈적 사고",
    subtitle: "조건부 확률에서 MLE/MAP와 정규화까지 이어지는 장",
    summary: "확률, 사건, 조건부 확률, 독립성, 몬티홀 문제, 전확률정리, 베이즈 정리, 확률변수, 주요 분포, MLE/MAP를 다룹니다. L2 정규화와 사전분포의 연결도 함께 설명합니다.",
    detailPath: "chapters/l2-ch01/",
    goals: [
      "조건부 확률과 독립성을 수식과 예제로 구분한다.",
      "전확률정리와 베이즈 정리를 추론 문제에 적용한다.",
      "MLE와 MAP의 차이를 우도와 사전분포의 관점에서 설명한다."
    ],
    keyQuestions: [
      "조건부 확률은 단순한 분수인가, 정보가 갱신된 세계인가?",
      "베이즈 정리는 왜 '원인에 대한 믿음'을 갱신하는 규칙으로 읽히는가?",
      "정규화는 최적화 기법인가, 사전 믿음의 표현인가?"
    ],
    equations: [
      {
        formula: "P(A|B) = P(A and B) / P(B)",
        note: "조건부 확률은 B가 일어난 세계에서 A의 비율을 다시 계산합니다."
      },
      {
        formula: "P(A|B) = P(B|A)P(A) / P(B)",
        note: "베이즈 정리는 likelihood, prior, evidence, posterior의 관계를 보여 줍니다."
      },
      {
        formula: "theta_MAP = argmax_theta p(D|theta)p(theta)",
        note: "MAP는 우도와 사전분포를 함께 고려한 추정입니다."
      }
    ],
    sections: [
      {
        heading: "확률은 불확실성의 문법이다",
        body: "머신러닝의 예측은 종종 확률로 표현됩니다. 이때 확률은 단순한 빈도뿐 아니라, 관측 정보가 추가될 때 믿음이 어떻게 바뀌는지를 표현하는 언어입니다."
      },
      {
        heading: "베이즈와 정규화",
        body: "L2 정규화는 파라미터가 너무 커지지 않도록 벌점을 주는 최적화 장치로 보이지만, 가우시안 사전분포를 둔 MAP 추정으로도 해석할 수 있습니다. 이 연결은 Lecture 1의 정규화를 확률적으로 다시 읽게 해 줍니다."
      }
    ],
    delivery: [
      "동전, 검사 양성률, 몬티홀 문제처럼 직관이 흔들리는 예제로 조건부 확률을 시작합니다.",
      "베이즈 정리는 네 항목 likelihood/prior/evidence/posterior 표로 고정합니다.",
      "MLE와 MAP는 같은 likelihood에서 prior가 들어오며 해가 어떻게 달라지는지 비교합니다."
    ],
    nextSteps: [
      "몬티홀 문제는 표본공간 그림과 간단한 시뮬레이션을 함께 떠올리면 직관의 흔들림이 줄어듭니다.",
      "MLE/MAP는 로지스틱 회귀와 정규화 장으로 돌아가 같은 문제를 다른 관점에서 읽게 해 줍니다.",
      "베르누이 우도, 베타 사후분포, MLE/MAP 비교를 직접 계산하며 베이즈 업데이트의 의미를 확인합니다.",
      "분포는 이름을 많이 외우기보다 Bernoulli, Gaussian, Categorical이 어떤 ML 예제와 연결되는지 중심으로 봅니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter1_probability_bayesian_thinking_lecture_notes.md"],
      ["HTML", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter1_probability_bayesian_v2.html"],
      ["PDF", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter1_probability_bayesian_v2.pdf"]
    ]
  },
  {
    id: "l2-ch02",
    lecture: "Lecture 2",
    number: "02",
    category: "정보이론",
    tags: ["entropy", "cross entropy", "log likelihood", "KL"],
    title: "정보이론과 손실함수",
    subtitle: "엔트로피와 KL divergence로 로그손실을 다시 읽기",
    summary: "정보량, 엔트로피, 교차 엔트로피, 로그우도, KL divergence를 다룹니다. 분류 모델의 로그손실이 정보이론적으로 어떤 의미를 갖는지 설명합니다.",
    detailPath: "chapters/l2-ch02/",
    goals: [
      "정보량과 엔트로피를 불확실성의 측도로 설명한다.",
      "교차 엔트로피와 로그우도의 관계를 분류 손실과 연결한다.",
      "KL divergence의 비대칭성과 분포 근사 의미를 이해한다."
    ],
    keyQuestions: [
      "놀라운 사건은 왜 더 많은 정보를 주는가?",
      "교차 엔트로피를 줄인다는 말은 어떤 분포를 어떤 분포에 가깝게 만드는가?",
      "KL divergence는 거리처럼 보이지만 왜 대칭이 아닌가?"
    ],
    equations: [
      {
        formula: "I(x) = -log p(x)",
        note: "드문 사건일수록 정보량이 큽니다."
      },
      {
        formula: "H(p) = -sum_x p(x) log p(x)",
        note: "엔트로피는 평균 정보량이며 분포의 불확실성을 나타냅니다."
      },
      {
        formula: "KL(p||q) = sum_x p(x) log(p(x)/q(x))",
        note: "KL divergence는 p를 기준으로 q가 얼마나 다른지를 재는 비대칭 척도입니다."
      }
    ],
    sections: [
      {
        heading: "손실함수의 정보이론적 의미",
        body: "분류 모델의 cross entropy loss는 정답 분포가 기대하는 코드 길이를 모델 분포가 얼마나 잘 맞추는지를 묻습니다. 따라서 loss minimization은 단순한 벌점 최소화가 아니라 분포 근사의 문제입니다."
      },
      {
        heading: "KL divergence와 모델 학습",
        body: "KL(p||q)는 실제 분포 p에 대해 모델 분포 q가 틀릴 때 생기는 추가 코드 길이로 해석할 수 있습니다. 이 관점은 maximum likelihood와 cross entropy가 왜 같은 방향을 가리키는지 설명합니다."
      }
    ],
    delivery: [
      "동전의 편향이 커질 때 엔트로피가 어떻게 변하는지 시각화합니다.",
      "one-hot label과 softmax 출력의 cross entropy를 직접 계산합니다.",
      "p와 q를 바꿔 KL(p||q), KL(q||p)가 달라지는 예제를 반드시 보여 줍니다."
    ],
    nextSteps: [
      "로그의 밑과 단위(bit/nat)를 구분하면 정보량 수식의 의미가 더 선명해집니다.",
      "로지스틱 회귀와 softmax 분류의 loss를 나란히 놓고 비교해 봅니다.",
      "KL divergence는 이산 분포 예제와 가우시안 분포 예제를 분리해서 읽으면 쓰임이 더 명확해집니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter2_information_theory_loss_functions_lecture_notes.md"],
      ["HTML", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter2_information_theory.html"],
      ["PDF", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter2_information_theory.pdf"]
    ]
  },
  {
    id: "l2-ch03",
    lecture: "Lecture 2",
    number: "03",
    category: "의사결정",
    tags: ["Bayes risk", "cost-sensitive", "GLM", "calibration"],
    title: "베이즈 의사결정과 판별",
    subtitle: "확률 예측을 실제 판단으로 바꾸는 기준",
    summary: "베이즈 위험, 비용민감 학습, 일반화 선형모형, 링크 함수, calibration, 예측 확률의 품질 평가를 다룹니다. 예측 확률을 단순 점수가 아니라 의사결정의 입력으로 해석합니다.",
    detailPath: "chapters/l2-ch03/",
    goals: [
      "베이즈 위험을 사후확률과 비용의 기대값으로 표현한다.",
      "비용민감 학습에서 임계값과 손실의 관계를 설명한다.",
      "calibration이 정확도와 다른 평가 축임을 이해한다."
    ],
    keyQuestions: [
      "정확한 분류와 좋은 확률 예측은 같은 목표인가?",
      "오탐과 미탐의 비용이 다르면 최적 임계값은 어떻게 달라지는가?",
      "모델이 80%라고 말할 때 실제로 80%만큼 맞는다는 것을 어떻게 확인하는가?"
    ],
    equations: [
      {
        formula: "R(a|x) = sum_y lambda(a,y) P(y|x)",
        note: "행동 a의 조건부 위험은 가능한 실제 y에 대한 비용의 기대값입니다."
      },
      {
        formula: "a*(x) = argmin_a R(a|x)",
        note: "베이즈 의사결정은 조건부 위험이 가장 낮은 행동을 선택합니다."
      },
      {
        formula: "E[y|g(x)] = g(x)",
        note: "완전 보정된 모델은 같은 예측확률을 낸 샘플들의 실제 빈도와 일치합니다."
      }
    ],
    sections: [
      {
        heading: "확률에서 행동으로",
        body: "분류 모델은 y를 바로 내놓을 수도 있지만, 의사결정 관점에서는 먼저 P(y|x)를 얻고 비용 구조에 따라 행동을 고릅니다. 의료, 금융, 운영 의사결정에서는 비용의 비대칭성이 핵심입니다."
      },
      {
        heading: "보정의 의미",
        body: "calibration은 모델 확률이 실제 빈도와 맞는지를 봅니다. 정확도가 높아도 확률이 과신되어 있으면 위험 기반 의사결정에는 부적절할 수 있습니다."
      }
    ],
    delivery: [
      "오탐과 미탐 비용이 다른 사례로 임계값 변화의 필요성을 보여 줍니다.",
      "GLM은 확률분포, 선형예측자, 링크 함수의 세 요소로 정리합니다.",
      "reliability diagram과 Brier score를 통해 calibration을 시각적으로 설명합니다."
    ],
    nextSteps: [
      "베이즈 위험은 2x2 비용행렬 예제로 바꾸어 보면 임계값 선택의 의미가 잘 드러납니다.",
      "GLM은 로지스틱 회귀와 포아송 회귀 같은 대표 사례를 중심으로 먼저 이해합니다.",
      "calibration은 캡스톤 실습과 연결해 실제 확률 예측 품질을 점검하는 기준으로 읽습니다."
    ],
    sourceLinks: [
      ["Markdown", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter3_bayesian_decision_lecture_notes.md"],
      ["HTML", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter3_bayesian_decision.html"],
      ["PDF", "Lecture-2 엔트로피, 베이지안, 생성적모델/chapter3_bayesian_decision.pdf"]
    ]
  }
];

export const checklistItems = [
  ["문제 설정", "특성 공간, 가설, 손실함수로 지도학습 문제를 설명할 수 있습니다."],
  ["기하", "내적, 행렬, 고유분해, PCA가 데이터 구조 해석에 쓰이는 위치를 말할 수 있습니다."],
  ["최적화", "그래디언트와 제약 조건이 모델 학습의 업데이트 규칙으로 이어지는 과정을 이해합니다."],
  ["확률/정보", "우도, 엔트로피, KL divergence가 손실함수와 어떻게 연결되는지 설명할 수 있습니다."],
  ["의사결정", "예측 확률을 비용, 위험, calibration 관점에서 점검할 수 있습니다."]
];
