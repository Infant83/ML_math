# ML을 위한 기초 수학 강의자료

이 저장소는 머신러닝을 이해하고 설명하기 위해 필요한 기초 수학 개념을 강의식으로 정리하는 Lecture 시리즈 초안입니다. 선형대수, 미분과 최적화, 확률, 정보이론, 베이즈적 사고를 단순 공식 암기가 아니라 모델 학습과 예측 해석에 연결하는 것을 목표로 합니다.

현재 자료는 강의노트 Markdown, HTML/PDF 렌더링 산출물, DOCX/PPTX 초안이 함께 들어 있는 작업 저장소입니다. 향후에는 각 장의 설명 밀도, 예제, 실습 코드, 그림, 연습문제를 순차적으로 보강하여 실제 강의용 노트로 업데이트할 예정입니다.

## 강의 목표

- 머신러닝 모델을 수식, 기하, 확률 관점에서 읽을 수 있도록 기본 언어를 정리합니다.
- 판별모델과 생성적 사고를 나누어 이해하되, 손실함수와 확률 추정이라는 공통 기반으로 다시 연결합니다.
- 수학 개념을 곧바로 모델링 상황에 붙입니다. 예를 들어 내적은 결정경계와 유사도, 고유분해는 PCA, 그래디언트는 학습 알고리즘, 엔트로피는 로그손실과 연결합니다.
- 강의자는 개념 설명, 판서/슬라이드, 간단한 Python 예제를 조합해 수업 흐름을 구성할 수 있습니다.

## 저장소 구성

| 위치 | 내용 | 상태 |
| --- | --- | --- |
| [`Lecture-1 선형대수, 미적분, 판별적모델`](<Lecture-1 선형대수, 미적분, 판별적모델>) | 판별적 머신러닝을 이해하기 위한 선형대수, 미분, 최적화, 선형모형, 차원축소, 신경망, 캡스톤 초안 | 8개 장의 강의노트 초안과 렌더링 산출물 포함 |
| [`Lecture-2 엔트로피, 베이지안, 생성적모델`](<Lecture-2 엔트로피, 베이지안, 생성적모델>) | 확률, 베이즈 정리, 정보이론, KL divergence, 베이즈 의사결정 초안 | 3개 장의 강의노트 초안과 렌더링 산출물 포함 |
| 루트 문서/PPTX | Lecture Series 1/2 DOCX, 발표자료, 보조 이미지, 노트북 초안 | 강의 전체 구조와 발표자료 후보 |

## Lecture 1: 선형대수, 미적분, 판별적 모델

Lecture 1은 "데이터를 벡터 공간에 놓고, 손실을 줄이는 방향으로 모델을 학습한다"는 판별모델의 기본 구조를 따라갑니다.

| 장 | 대표 강의노트 | 핵심 주제 |
| --- | --- | --- |
| 1 | [`chapter1_introduction_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter1_introduction_lecturenote.md>) | 머신러닝 코스 목표, 특성 공간, 입력/라벨, 가설 공간, 손실함수, 판별모형 |
| 2 | [`chapter2_linear_algebra_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter2_linear_algebra_lecturenote.md>) | 벡터, 내적, norm, distance, 행렬, 선형변환, rank, 조건수, 고유값/고유벡터, SVD와 PCA 직관 |
| 3 | [`chapter3_optimization_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter3_optimization_lecturenote.md>) | 다변수 미분, 그래디언트, 야코비안, 헤시안, 경사하강법, 모멘텀, 뉴턴법, BFGS 직관 |
| 4 | [`chapter4_Convex_Optimization_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter4_Convex_Optimization_lecturenote.md>) | 제약 최적화, 라그랑주 승수, KKT 조건, 투영 경사하강법, 볼록집합, 볼록함수, 볼록문제 표준형 |
| 5 | [`chapter5_linear_models_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter5_linear_models_lecturenote.md>) | 선형회귀, 최소제곱, L1/L2 정규화, 로지스틱 회귀, 로짓, 결정경계, 판별 관점의 평가 |
| 6 | [`chapter6_dimensionality_reduction_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter6_dimensionality_reduction_lecturenote.md>) | PCA, 공분산, 고유분해, 투영과 재구성, SVD, 저랭크 근사, 데이터 구조 해석 |
| 7 | [`chapter7_neural_networks_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter7_neural_networks_lecturenote.md>) | 계산 그래프, forward/backward propagation, 역전파, SGD, 미니배치, Adam 개념 |
| 8 | [`chapter8_capstone_lecturenote.md`](<Lecture-1 선형대수, 미적분, 판별적모델/chapter8_capstone_lecturenote.md>) | 날씨 데이터 로지스틱 회귀, 전처리, 학습/평가, ROC/AUC, PCA 시각화 |

## Lecture 2: 엔트로피, 베이지안, 생성적 모델

Lecture 2는 "예측을 확률로 표현하고, 불확실성을 정보량과 의사결정으로 다룬다"는 흐름으로 구성되어 있습니다. Lecture 1의 손실함수와 판별모형을 확률적 해석으로 확장하는 다리 역할을 합니다.

| 장 | 대표 강의노트 | 핵심 주제 |
| --- | --- | --- |
| 1 | [`chapter1_probability_bayesian_thinking_lecture_notes.md`](<Lecture-2 엔트로피, 베이지안, 생성적모델/chapter1_probability_bayesian_thinking_lecture_notes.md>) | 확률, 사건, 조건부 확률, 독립성, 몬티홀 문제, 전확률정리, 베이즈 정리, 확률변수, 주요 분포, MLE/MAP, L2 정규화와 사전분포 |
| 2 | [`chapter2_information_theory_loss_functions_lecture_notes.md`](<Lecture-2 엔트로피, 베이지안, 생성적모델/chapter2_information_theory_loss_functions_lecture_notes.md>) | 정보량, 엔트로피, 교차 엔트로피, 로그우도, KL divergence, 분포 차이, 로지스틱 회귀의 정보이론적 해석 |
| 3 | [`chapter3_bayesian_decision_lecture_notes.md`](<Lecture-2 엔트로피, 베이지안, 생성적모델/chapter3_bayesian_decision_lecture_notes.md>) | 베이즈 위험, 비용민감 학습, GLM, 링크 함수, calibration, 예측 확률 품질 평가, 날씨 예측 신뢰도 사례 |

## 현재 초안의 성격

- Markdown 파일은 설명과 수식을 보강하기 위한 원천 텍스트 역할을 합니다.
- HTML/PDF/DOCX 파일은 강의 배포와 검토를 위한 렌더링 산출물입니다.
- PPTX와 루트 DOCX는 강의 흐름, 발표자료, 또는 별도 편집본의 후보입니다.
- 일부 노트는 초안 생성 과정의 흔적이 남아 있을 수 있으므로, 공개 강의자료로 다듬을 때는 내부 메모를 강사용 노트나 본문 설명으로 정리해야 합니다.

## 향후 업데이트 계획

1. 각 장의 도입부를 "학습 목표 - 핵심 질문 - 수업 후 할 수 있어야 하는 것" 형식으로 정리합니다.
2. 수식 전개는 직관, 정의, 머신러닝 연결, 짧은 계산 예제 순서로 보강합니다.
3. 판별모형, 베이즈 추정, 정보이론 사이의 연결 고리를 반복적으로 드러냅니다.
4. Python 예제는 데이터 생성, 시각화, 모델 학습, 결과 해석까지 재현 가능하게 정리합니다.
5. 각 장 끝에 체크포인트 질문, 연습문제, 다음 장으로 이어지는 연결 문단을 추가합니다.
6. Markdown 원천을 기준으로 HTML/PDF/DOCX 산출물을 다시 생성하고, README의 강의 로드맵도 함께 갱신합니다.

## 권장 작업 방식

- 새 강의노트를 작성하거나 기존 노트를 크게 고칠 때는 먼저 해당 장의 Markdown 원천을 수정합니다.
- 산출물을 다시 만들 경우 동일한 장 번호와 주제를 유지하고, 변경된 파일명을 README에 반영합니다.
- 강의 내용은 "수학 개념 자체"보다 "그 개념이 머신러닝 모델을 어떻게 설명하는가"를 중심에 둡니다.
- 저장소 작업 방침은 [`AGENTS.md`](<AGENTS.md>)를 따릅니다.
