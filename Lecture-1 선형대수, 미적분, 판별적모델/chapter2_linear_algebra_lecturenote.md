## 사고 과정

사용자의 지시를 분석하여 '선형대수 기초와 데이터 기하' 강의 노트를 작성해야 한다. 주요 내용은 다음과 같다:

1.  **강의 노트 전체 구조**:
    *   2.1 '벡터와 내적, Norm, Distance' 부분 상세 작성.
    *   2.2 '행렬과 선형변환' 부분 상세 작성.
    *   2.3 '고유값, 고유벡터, 직교기저(2D 직관)' 부분 상세 작성.

2.  **각 섹션 세부 내용**:
    *   **2.1 벡터와 내적, Norm, Distance**:
        *   고양이/개 분류의 결정경계 스케치 사례 (이전 섹션에서 다루었으므로 간략히 언급하고 연결).
        *   입력공간/라벨/가설공간/손실함수 이론 (이전 섹션에서 다루었으므로 간략히 언급하고 연결).
        *   선형 결정경계의 기하학적 의미 예제 (이전 섹션에서 다루었으므로 간략히 언급하고 연결).
        *   벡터의 정의, 내적의 기하학적 의미, Norm(길이)과 Distance(거리)의 정의 및 계산.
    *   **2.2 행렬과 선형변환**:
        *   행렬의 정의, 행렬 연산(곱셈, 전치, 역행렬, 행렬식) 이론.
        *   2x2 스케일/회전 변환으로 데이터 구름 변형 사례.
        *   랭크(Rank)와 조건수(Condition Number) 이론.
        *   2x2 행렬의 역행렬 존재성 판단 예제.
    *   **2.3 고유값, 고유벡터, 직교기저(2D 직관)**:
        *   고유값(Eigenvalue)과 고유벡터(Eigenvector)의 정의 및 기하학적 의미.
        *   직교기저(Orthogonal Basis)의 개념.
        *   타원형 데이터의 주축 찾기 사례 (PCA와 연결).
        *   대칭행렬 분해(Symmetric Matrix Decomposition), 직교 대각화(Orthogonal Diagonalization), SVD(Singular Value Decomposition) 개관 이론.
        *   2x2 공분산의 주성분 방향 선택 예제.

3.  **언어 및 스타일**:
    *   한국어로 상세하게 작성.
    *   수학적 이론과 직관적 이해를 모두 포함.
    *   자연스럽게 흐르고 논리적으로 구성.
    *   정확하고 간결하게 작성.
    *   제공된 참고 자료를 기반으로 작성.

**세부 계획**:

*   **2.1 벡터와 내적, Norm, Distance**:
    *   벡터의 정의: 크기와 방향을 가진 물리량, 기하학적 표현.
    *   내적(Dot Product): 두 벡터의 유사성 측정, 기하학적 의미(투영).
    *   Norm(벡터의 길이): 벡터의 크기, 유클리드 노름(L2 Norm) 설명.
    *   Distance(거리): 두 벡터 간의 거리, 유클리드 거리 설명.
    *   이전 섹션의 결정 경계, 손실 함수 등과의 연관성 간략히 언급.
*   **2.2 행렬과 선형변환**:
    *   행렬의 정의: 숫자들의 직사각형 배열.
    *   행렬 연산:
        *   행렬 곱셈: 정의, 조건, 기하학적 의미(선형 변환의 합성).
        *   전치(Transpose): 정의, 사용처.
        *   역행렬(Inverse Matrix): 정의, 존재 조건(정방행렬, 비특이행렬), 계산 방법(2x2 예시).
        *   행렬식(Determinant): 정의, 기하학적 의미(면적/부피 변화율), 역행렬 존재 조건과의 관계.
    *   선형 변환: 행렬을 이용한 벡터 공간의 변환(스케일링, 회전, 전단).
    *   2x2 스케일/회전 변환으로 데이터 구름 변형 사례: 시각적 예시.
    *   랭크(Rank): 행렬의 독립적인 행/열의 개수, 선형 변환의 차원 감소 능력.
    *   조건수(Condition Number): 행렬의 안정성, 역행렬 계산의 민감도.
    *   2x2 행렬의 역행렬 존재성 판단 예제: 행렬식 계산을 통한 판단.
*   **2.3 고유값, 고유벡터, 직교기저(2D 직관)**:
    *   고유값과 고유벡터: 선형 변환 시 방향이 변하지 않고 크기만 변하는 벡터, 그 변화율이 고유값.
    *   기하학적 의미: 데이터의 주된 분산 방향.
    *   직교기저: 서로 직교하는 벡터들로 이루어진 기저.
    *   타원형 데이터의 주축 찾기 사례: PCA(주성분 분석)와의 연결, 데이터의 분산이 가장 큰 방향.
    *   대칭행렬 분해: 고유값 분해(Eigen-decomposition)와 연결, 대칭행렬의 특성.
    *   직교 대각화: 대칭행렬을 고유벡터로 이루어진 직교 행렬로 대각화.
    *   SVD(Singular Value Decomposition) 개관: 임의의 행렬에 대한 일반화된 분해, 특이값과 특이벡터.
    *   2x2 공분산의 주성분 방향 선택 예제: 공분산 행렬의 고유값/고유벡터 계산을 통해 주성분 방향 시각화.

**참고 자료 매핑**:

*   **벡터/내적/Norm/Distance**: `Linear Algebra for Machine Learning`, `Linear Algebra Operations For Machine Learning`, `Hyperplane equation intuition / geometric interpretation`, `Essential Math for Machine Learning: Hyperplanes`, `Linear Classifiers: Exploring Geometrical Intuition`, `22.1. Geometry and Linear Algebraic Operations`, `numpy.linalg.norm`.
*   **행렬/선형변환/랭크/역행렬/조건수**: `Linear Algebra for Machine Learning`, `Linear Algebra Operations For Machine Learning`, `Introduction to Linear Algebra for Applied Machine Learning ...`, `Inverse of a Matrix`, `numpy.reshape`.
*   **고유값/고유벡터/직교기저/PCA/SVD**: `Eigenvalues and Eigenvectors in Data Science: Intuition ... - Medium`, `Chapter 12 Eigenvalues and Eigenvectors | Linear Algebra for Data ...`, `Eigenvalues and eigenvectors - Wikipedia`, `PCA: A geometric explanation of Eigenvectors and Eigenvalues, PART`, `numpy.linalg.svd`, `numpy.random.multivariate_normal`.

이 계획을 바탕으로 강의 노트를 작성한다.

---

# 선형대수 기초와 데이터 기하

머신러닝에서 데이터는 대부분 벡터와 행렬의 형태로 표현됩니다. 따라서 선형대수학은 머신러닝 알고리즘의 작동 원리를 이해하고, 데이터를 효율적으로 처리하며, 모델을 최적화하는 데 필수적인 수학적 도구입니다. 본 장에서는 선형대수의 핵심 개념들을 데이터의 기하학적 의미와 연결하여 직관적으로 이해하는 데 초점을 맞춥니다.

## 2.1 벡터와 내적, Norm, Distance

### 벡터 (Vector)

**직관적 이해**: 벡터는 크기와 방향을 동시에 가지는 물리량입니다. 예를 들어, "동쪽으로 5km 이동"은 벡터로 표현될 수 있습니다. 데이터 과학에서는 데이터를 구성하는 개별 특성(feature)들을 모아놓은 리스트나 배열로 생각할 수 있습니다.

**수학적 의미**: $n$차원 공간에서 벡터는 $n$개의 스칼라 값으로 이루어진 순서쌍으로 표현됩니다. 예를 들어, 2차원 벡터는 $(x, y)$ 형태로, 3차원 벡터는 $(x, y, z)$ 형태로 나타낼 수 있습니다. 기하학적으로는 원점에서 시작하여 특정 점으로 향하는 화살표로 시각화할 수 있습니다.

### 내적 (Dot Product)

**직관적 이해**: 두 벡터가 얼마나 같은 방향을 향하고 있는지를 측정하는 척도입니다. 두 벡터가 평행하고 같은 방향을 향할수록 내적 값은 커지고, 수직일 경우 0이 됩니다.

**수학적 의미**: 두 벡터 $\mathbf{a} = (a_1, a_2, \dots, a_n)$와 $\mathbf{b} = (b_1, b_2, \dots, b_n)$의 내적은 각 성분들의 곱을 모두 더한 값입니다.
$$ \mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i b_i = a_1 b_1 + a_2 b_2 + \dots + a_n b_n $$
내적은 또한 두 벡터의 크기와 그 사이 각도의 코사인 값으로도 표현됩니다.
$$ \mathbf{a} \cdot \mathbf{b} = ||\mathbf{a}|| \cdot ||\mathbf{b}|| \cdot \cos(\theta) $$
여기서 $\theta$는 두 벡터 사이의 각도입니다. 이 식을 통해 내적이 두 벡터의 유사성을 측정하는 데 사용될 수 있음을 알 수 있습니다. 예를 들어, 텍스트 분석에서 두 문서 벡터의 내적은 두 문서의 유사도를 나타낼 수 있습니다.

### Norm (벡터의 길이 또는 크기)

**직관적 이해**: 벡터의 '길이' 또는 '크기'를 나타냅니다. 원점에서 벡터의 끝점까지의 거리라고 생각할 수 있습니다.

**수학적 의미**: 벡터의 Norm은 다양한 방식으로 정의될 수 있지만, 머신러닝에서 가장 흔히 사용되는 것은 **유클리드 노름 (Euclidean Norm, L2 Norm)**입니다.
벡터 $\mathbf{v} = (v_1, v_2, \dots, v_n)$의 유클리드 노름은 다음과 같이 계산됩니다.
$$ ||\mathbf{v}||_2 = \sqrt{\sum_{i=1}^{n} v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2} $$
이는 피타고라스 정리를 $n$차원으로 확장한 것입니다.

### Distance (두 벡터 간의 거리)

**직관적 이해**: 두 데이터 포인트가 얼마나 '떨어져' 있는지를 나타냅니다. 특성 공간에서 두 점 사이의 직선 거리입니다.

**수학적 의미**: 두 벡터 $\mathbf{a}$와 $\mathbf{b}$ 사이의 거리는 두 벡터의 차이 벡터의 노름으로 정의됩니다. 가장 일반적인 것은 **유클리드 거리 (Euclidean Distance)**입니다.
$$ \text{dist}(\mathbf{a}, \mathbf{b}) = ||\mathbf{a} - \mathbf{b}||_2 = \sqrt{\sum_{i=1}^{n} (a_i - b_i)^2} $$
머신러닝에서 거리는 클러스터링(Clustering)이나 K-최근접 이웃(K-Nearest Neighbors, KNN)과 같은 알고리즘에서 데이터 포인트 간의 유사성을 측정하는 데 활용됩니다.

### 머신러닝 개념과의 연결

*   **특성 공간**: 각 데이터 포인트는 특성 공간 내의 한 벡터로 표현됩니다. 이 공간에서 벡터의 내적, 노름, 거리는 데이터 포인트 간의 관계를 정량화하는 데 사용됩니다.
*   **결정 경계**: 선형 분류기에서 결정 경계는 $\mathbf{w} \cdot \mathbf{x} + b = 0$ 형태의 초평면으로 표현됩니다. 여기서 $\mathbf{w}$는 가중치 벡터, $\mathbf{x}$는 입력 특성 벡터입니다. 새로운 데이터 포인트 $\mathbf{x}'$가 주어졌을 때, $\mathbf{w} \cdot \mathbf{x}' + b$의 부호에 따라 어느 클래스에 속하는지 결정됩니다. 이는 $\mathbf{x}'$가 결정 경계로부터 어느 방향에 위치하는지를 내적을 통해 판단하는 것입니다.
*   **손실 함수**: 모델의 예측 오차를 측정하는 손실 함수는 종종 예측값과 실제값 간의 거리(예: MSE) 또는 내적(예: 힌지 손실)을 기반으로 합니다. 손실을 최소화하는 것은 모델의 예측이 실제값에 '가까워지도록' 파라미터를 조정하는 과정입니다.

## 2.2 행렬과 선형변환

### 행렬 (Matrix)

**직관적 이해**: 행렬은 숫자들을 직사각형 형태로 배열한 것입니다. 데이터를 표 형태로 정리하거나, 여러 벡터를 한 번에 다루는 데 사용됩니다.

**수학적 의미**: $m$개의 행과 $n$개의 열을 가지는 행렬 $\mathbf{A}$는 $m \times n$ 행렬이라고 합니다. 각 원소는 $a_{ij}$로 표현되며, $i$는 행 인덱스, $j$는 열 인덱스입니다.

### 행렬 연산

행렬은 다양한 연산을 통해 데이터를 변환하거나 분석하는 데 사용됩니다.

1.  **행렬 곱셈 (Matrix Multiplication)**
    *   **정의**: $m \times n$ 행렬 $\mathbf{A}$와 $n \times p$ 행렬 $\mathbf{B}$의 곱 $\mathbf{C} = \mathbf{AB}$는 $m \times p$ 행렬이 됩니다. $\mathbf{C}$의 각 원소 $c_{ij}$는 $\mathbf{A}$의 $i$번째 행과 $\mathbf{B}$의 $j$번째 열의 내적으로 계산됩니다.
        $$ c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj} $$
    *   **조건**: $\mathbf{A}$의 열 개수와 $\mathbf{B}$의 행 개수가 같아야 합니다.
    *   **기하학적 의미**: 행렬 곱셈은 선형 변환의 합성을 나타냅니다. 즉, 한 행렬이 수행하는 변환에 이어 다른 행렬이 수행하는 변환을 연속적으로 적용하는 것과 같습니다.
2.  **전치 (Transpose)**
    *   **정의**: 행렬 $\mathbf{A}$의 전치 $\mathbf{A}^T$는 $\mathbf{A}$의 행과 열을 바꾼 행렬입니다. 즉, $a_{ij}$는 $a_{ji}^T$가 됩니다.
    *   **사용처**: 벡터의 내적을 행렬 곱셈으로 표현하거나, 공분산 행렬과 같이 대칭적인 구조를 다룰 때 유용합니다.
3.  **역행렬 (Inverse Matrix)**
    *   **정의**: 정방행렬 $\mathbf{A}$에 대해 $\mathbf{AA}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}$를 만족하는 행렬 $\mathbf{A}^{-1}$을 $\mathbf{A}$의 역행렬이라고 합니다. 여기서 $\mathbf{I}$는 항등 행렬(Identity Matrix)입니다.
    *   **존재 조건**: 행렬 $\mathbf{A}$가 정방행렬(square matrix)이고, 특이 행렬(singular matrix)이 아니어야 합니다. 즉, 행렬식(determinant)이 0이 아니어야 합니다.
    *   **2x2 행렬의 역행렬**:
        행렬 $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$의 역행렬은 다음과 같습니다.
        $$ \mathbf{A}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} $$
        여기서 $ad - bc$는 행렬 $\mathbf{A}$의 행렬식($\det(\mathbf{A})$)입니다.
4.  **행렬식 (Determinant)**
    *   **정의**: 정방행렬에 대해 계산되는 스칼라 값입니다.
    *   **기하학적 의미**: 선형 변환이 공간의 부피(2차원에서는 면적)를 얼마나 확대 또는 축소시키는지를 나타냅니다. 행렬식이 0이면 변환이 공간을 압축하여 차원을 감소시킨다는 의미이며, 이는 역행렬이 존재하지 않음을 뜻합니다.
    *   **2x2 행렬의 행렬식**: $\det(\mathbf{A}) = ad - bc$

### 선형 변환 (Linear Transformation)

행렬은 벡터 공간을 다른 벡터 공간으로 변환하는 '함수'로 볼 수 있습니다. 이러한 변환을 선형 변환이라고 합니다.

*   **스케일링 (Scaling)**: 벡터의 크기를 변경합니다.
    예: $\begin{pmatrix} 2 & 0 \\ 0 & 0.5 \end{pmatrix}$는 x축으로 2배, y축으로 0.5배 스케일링합니다.
*   **회전 (Rotation)**: 벡터의 방향을 변경합니다.
    예: $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$는 $\theta$만큼 회전합니다.
*   **전단 (Shear)**: 한 축을 따라 다른 축을 밀어냅니다.

**2x2 스케일/회전 변환으로 데이터 구름 변형 사례**:
원형으로 분포된 데이터 포인트들이 특정 행렬을 통해 선형 변환되면, 타원형으로 변형되거나 회전하는 등 그 분포의 형태가 바뀝니다. 이는 머신러닝에서 데이터의 특성을 변환하거나, 차원을 축소하는 등의 전처리 과정에서 행렬 변환이 어떻게 사용되는지를 시각적으로 보여줍니다.

### 랭크 (Rank)

**직관적 이해**: 행렬의 '독립적인' 정보의 양을 나타냅니다. 행렬이 표현하는 선형 변환이 공간의 차원을 얼마나 유지하는지를 의미합니다.

**수학적 의미**: 행렬의 랭크는 그 행렬의 선형 독립인 행 벡터(또는 열 벡터)의 최대 개수입니다. 랭크는 행렬이 나타내는 선형 변환의 이미지 공간(Image Space)의 차원과 같습니다. 랭크가 낮은 행렬은 정보를 압축하거나 차원을 축소하는 변환을 수행합니다.

### 조건수 (Condition Number)

**직관적 이해**: 행렬이 '얼마나 불안정한지'를 나타내는 척도입니다. 조건수가 높으면 작은 입력 변화에도 출력 결과가 크게 변할 수 있어 수치적으로 불안정하다고 판단합니다.

**수학적 의미**: 행렬 $\mathbf{A}$의 조건수는 $|| \mathbf{A} || \cdot || \mathbf{A}^{-1} ||$로 정의됩니다. 조건수가 크다는 것은 행렬이 거의 특이 행렬에 가깝다는 것을 의미하며, 이는 역행렬 계산이나 선형 시스템 해결 시 오차가 증폭될 수 있음을 시사합니다.

### 2x2 행렬의 역행렬 존재성 판단 예제

**문제**: 다음 행렬들의 역행렬이 존재하는지 판단하시오.
1.  $\mathbf{A} = \begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}$
2.  $\mathbf{B} = \begin{pmatrix} 3 & 1 \\ 2 & 1 \end{pmatrix}$

**풀이**: 역행렬이 존재하려면 행렬식이 0이 아니어야 합니다.

1.  **행렬 A**:
    $\det(\mathbf{A}) = (2 \times 2) - (1 \times 4) = 4 - 4 = 0$
    행렬식이 0이므로, **행렬 A의 역행렬은 존재하지 않습니다.** (특이 행렬)
2.  **행렬 B**:
    $\det(\mathbf{B}) = (3 \times 1) - (1 \times 2) = 3 - 2 = 1$
    행렬식이 0이 아니므로, **행렬 B의 역행렬은 존재합니다.** (비특이 행렬)

## 2.3 고유값, 고유벡터, 직교기저 (2D 직관)

### 고유값 (Eigenvalue)과 고유벡터 (Eigenvector)

**직관적 이해**: 선형 변환(행렬 곱셈)을 가했을 때, 방향은 변하지 않고 크기만 변하는 특별한 벡터들이 있습니다. 이 벡터들을 '고유벡터'라고 하고, 이때 변하는 크기 비율을 '고유값'이라고 합니다. 데이터의 '주된 방향'과 그 방향으로의 '분산 정도'를 나타냅니다.

**수학적 의미**: 정방행렬 $\mathbf{A}$에 대해 다음 식을 만족하는 0이 아닌 벡터 $\mathbf{v}$를 $\mathbf{A}$의 고유벡터라고 하고, 스칼라 $\lambda$를 고유값이라고 합니다.
$$ \mathbf{Av} = \lambda\mathbf{v} $$
이 식은 행렬 $\mathbf{A}$가 벡터 $\mathbf{v}$에 작용했을 때, $\mathbf{v}$의 방향은 그대로 유지되고 크기만 $\lambda$배로 변한다는 것을 의미합니다.

### 직교기저 (Orthogonal Basis)

**직관적 이해**: 서로 수직인(직교하는) 벡터들로 이루어진 좌표계의 축들을 의미합니다. 이 축들을 사용하면 공간 내의 어떤 점이든 쉽게 표현할 수 있습니다.

**수학적 의미**: 벡터 공간의 기저(basis)를 이루는 벡터들이 모두 서로 직교할 때, 이를 직교기저라고 합니다. 만약 이 벡터들이 모두 단위 벡터(길이가 1인 벡터)이면 정규직교기저(Orthonormal Basis)라고 합니다. 직교기저는 데이터의 표현을 단순화하고 계산을 효율적으로 만드는 데 중요합니다.

### 타원형 데이터의 주축 찾기 사례 (PCA와의 연결)

데이터가 2차원 평면에 타원형으로 분포되어 있다고 가정해 봅시다. 이 타원의 '주축'은 데이터의 분산이 가장 큰 방향과 그에 수직인 방향을 나타냅니다.

<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2hd_aNbFtz2rwy2T4m7Zig.png" alt="PCA 주성분">

위 그림에서 PC1(Principal Component 1)과 PC2(Principal Component 2)는 데이터의 주축을 나타냅니다. PC1은 데이터의 분산이 가장 큰 방향이고, PC2는 PC1에 직교하면서 다음으로 분산이 큰 방향입니다. 이 PC1과 PC2의 방향은 데이터의 공분산 행렬(Covariance Matrix)의 고유벡터에 해당하며, 각 방향으로의 분산 정도는 해당 고유값에 해당합니다.

**주성분 분석 (Principal Component Analysis, PCA)**은 이 고유값과 고유벡터를 사용하여 데이터의 차원을 축소하거나, 데이터의 주요 패턴을 파악하는 데 사용되는 대표적인 머신러닝 기법입니다. PCA는 데이터의 공분산 행렬을 고유값 분해하여 데이터의 분산이 가장 큰 방향(주성분)을 찾습니다.

### 대칭행렬 분해 (Symmetric Matrix Decomposition) 및 직교 대각화 (Orthogonal Diagonalization)

*   **대칭행렬**: $\mathbf{A} = \mathbf{A}^T$를 만족하는 행렬입니다. 공분산 행렬은 항상 대칭행렬입니다.
*   **고유값 분해 (Eigen-decomposition)**: 대칭행렬은 항상 고유벡터들로 이루어진 직교 행렬로 대각화할 수 있습니다. 즉, 대칭행렬 $\mathbf{A}$는 다음과 같이 분해될 수 있습니다.
    $$ \mathbf{A} = \mathbf{PDP}^{-1} = \mathbf{PDP}^T $$
    여기서 $\mathbf{D}$는 고유값들을 대각 원소로 가지는 대각 행렬이고, $\mathbf{P}$는 고유벡터들을 열 벡터로 가지는 직교 행렬($\mathbf{P}^{-1} = \mathbf{P}^T$)입니다. 이 과정이 **직교 대각화**입니다. 이는 복잡한 선형 변환을 고유벡터 축을 따라 스케일링하는 단순한 변환으로 해석할 수 있게 해줍니다.

### 특이값 분해 (Singular Value Decomposition, SVD) 개관

**직관적 이해**: SVD는 고유값 분해를 임의의 직사각형 행렬에 대해 일반화한 것입니다. 어떤 행렬이든 세 개의 다른 행렬의 곱으로 분해할 수 있습니다. 데이터 압축, 노이즈 제거, 추천 시스템 등 다양한 분야에서 활용됩니다.

**수학적 의미**: 임의의 $m \times n$ 행렬 $\mathbf{A}$는 다음과 같이 분해될 수 있습니다.
$$ \mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T $$
*   $\mathbf{U}$: $m \times m$ 직교 행렬 (좌측 특이 벡터)
*   $\mathbf{\Sigma}$: $m \times n$ 직사각형 대각 행렬 (특이값)
*   $\mathbf{V}^T$: $n \times n$ 직교 행렬 (우측 특이 벡터의 전치)

여기서 $\mathbf{\Sigma}$의 대각 원소들은 특이값(Singular Value)이라고 하며, 행렬 $\mathbf{A}$가 데이터를 변환할 때 각 방향으로 얼마나 '중요한' 스케일링을 하는지를 나타냅니다. SVD는 데이터의 주요 패턴을 추출하고, 차원을 축소하는 강력한 도구입니다.

### 2x2 공분산의 주성분 방향 선택 예제

**문제**: 두 특성 $X_1, X_2$를 가진 데이터셋의 공분산 행렬이 다음과 같다고 가정합시다.
$$ \mathbf{C} = \begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix} $$
이 데이터의 주성분 방향(고유벡터)과 각 방향으로의 분산 정도(고유값)를 구하시오.

**풀이**: 공분산 행렬의 고유값과 고유벡터를 계산합니다.

1.  **고유값 계산**: $\det(\mathbf{C} - \lambda\mathbf{I}) = 0$
    $$ \det \begin{pmatrix} 5-\lambda & 2 \\ 2 & 2-\lambda \end{pmatrix} = (5-\lambda)(2-\lambda) - (2 \times 2) = 0 $$
    $$ 10 - 5\lambda - 2\lambda + \lambda^2 - 4 = 0 $$
    $$ \lambda^2 - 7\lambda + 6 = 0 $$
    $$ (\lambda - 1)(\lambda - 6) = 0 $$
    따라서 고유값은 $\lambda_1 = 6$, $\lambda_2 = 1$입니다.

2.  **고유벡터 계산**:
    *   **$\lambda_1 = 6$일 때**:
        $(\mathbf{C} - 6\mathbf{I})\mathbf{v}_1 = \mathbf{0}$
        $$ \begin{pmatrix} 5-6 & 2 \\ 2 & 2-6 \end{pmatrix} \begin{pmatrix} v_{1x} \\ v_{1y} \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ 2 & -4 \end{pmatrix} \begin{pmatrix} v_{1x} \\ v_{1y} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$
        $-v_{1x} + 2v_{1y} = 0 \implies v_{1x} = 2v_{1y}$
        고유벡터는 $\mathbf{v}_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ (정규화하면 $\frac{1}{\sqrt{5}}\begin{pmatrix} 2 \\ 1 \end{pmatrix}$)

    *   **$\lambda_2 = 1$일 때**:
        $(\mathbf{C} - 1\mathbf{I})\mathbf{v}_2 = \mathbf{0}$
        $$ \begin{pmatrix} 5-1 & 2 \\ 2 & 2-1 \end{pmatrix} \begin{pmatrix} v_{2x} \\ v_{2y} \end{pmatrix} = \begin{pmatrix} 4 & 2 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} v_{2x} \\ v_{2y} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$
        $4v_{2x} + 2v_{2y} = 0 \implies 2v_{2x} = -v_{2y}$
        고유벡터는 $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$ (정규화하면 $\frac{1}{\sqrt{5}}\begin{pmatrix} 1 \\ -2 \end{pmatrix}$)

**결론**:
*   가장 큰 고유값은 $\lambda_1 = 6$이며, 이에 해당하는 고유벡터는 $\mathbf{v}_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$입니다. 이 방향이 데이터의 분산이 가장 큰 주성분 방향입니다.
*   두 번째 고유값은 $\lambda_2 = 1$이며, 이에 해당하는 고유벡터는 $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$입니다. 이 방향은 첫 번째 주성분 방향에 직교하며, 다음으로 분산이 큰 방향입니다.

이 예제는 PCA가 데이터의 공분산 구조를 분석하여 가장 중요한 정보가 담긴 방향을 어떻게 찾아내는지를 보여줍니다.