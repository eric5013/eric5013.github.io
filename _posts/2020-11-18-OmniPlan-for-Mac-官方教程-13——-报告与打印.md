---
title: OmniPlan for Mac 官方教程 13—— 报告与打印
date: 2020-11-18
category: omniplan-tutorial

---



> 在需要将您的项目与同事和外界分享时，OmniPlan 专业版经过革新和改进的报告界面能使竞争对手们汗颜。本章介绍一些更细致的技巧，即如何利用 OmniPlan 中的 HTML 主题生成报告，以及如何修改这些主题或创建自己的主题。本应用程序还为报告的打印（无论是打印在纸张上还是打印为 PDF）提供完整的支持。

当需要与同事或外界分享您的项目时，除了[导出为各种格式](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/importing-and-exporting/#exportingtootherformats)以外，OmniPlan 还提供一系列强大的可自定义打印功能 — 使用 OmniPlan 专业版时，提供全新的界面用于创建漂亮的自定义报告。

在 OmniPlan 中打印
--------------

OmniPlan 提供一系列高度灵活的选项，用于直接从 Mac OS X 的标准打印对话框打印文稿。

选择 “文件”▸“打印”(**Command-P**)，然后从打印对话框中的弹出菜单选择**显示详细信息**，可查看 OmniPlan 的打印选项。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/GikMSB1605689425848.png)

  

1.  您可以打印任务视图、资源视图或网络视图（取决于主窗口中打开的视图）。您可以在任务和资源视图中选择是否打印大纲、甘特图和 / 或资源图表；由于网络视图没有大纲，您会直接导航至[页眉和页脚](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/reporting-and-printing/#customizingheadersandfooters)部分。
2.  **尺寸**的计算依据是项目的大小，以及在此处百分比字段中设置的缩放比例。当您更改宽度或高度时，另一个会相应更改。请注意，此处的更改会改写 “页面设置” 对话框中的 “缩放比例” 设置。在网络视图中打印时，可使用 “页眉和页脚” 部分的缩放比例百分比设置。
3.  您可以选择从大纲中以显示或全部展开形式进行打印时是否包含备注。任务和资源群组在项目中可以显示、全部展开或折叠的形式进行打印。
4.  您可以使用 “裁剪” 设定，裁剪项目中任何您不需要的部分。此处包含项目的概览。要定义要打印的区域，请拖移裁剪框的左边或右边，调整其大小，或者拖移方框的中心进行移动。如果您在 “开始” 和“结束”字段中输入日期，则裁剪框会更新以符合该日期。
5.  预览会以纸面形式显示您的项目。请使用按钮逐页查看，大体了解缩放比例和布局。
6.  当您按自己喜欢的方式设置打印选项后，您可以使用**预置**菜单**将当前设置存储为预置**。您可以选择是否将预设应用到当前选择的打印机或所有打印机，并可查看和编辑新预设 — 以及 “预置” 菜单的**显示预置**中的其他项目。
7.  与使用 Mac OS X 打印系统的其他应用程序一样，您可以 “打印” 到 PDF 文件，而不是打印到真正的纸张。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/3y8dm91605689425859.png)

  

**注意**  
从网络视图打印时，视图中图表的缩放比例确定通过打印对话框进行打印的初始缩放比例。您可以使用打印对话框中的**缩放比例**控制项，或通过更改网络视图中的缩放比例（使用 (**–**) 和 (**+**)，或使用网络视图右下角的缩放控制项放大和缩小）来编辑此项目。

除了上述打印对话框选项以外，OmniPlan 还支持标准 Mac OS X 页面设置对话框；从 “文件” 菜单选择**页面设置**即可访问。您可以在此设置纸张的大小、打印方向和文稿缩放比例；该信息会随文稿一并保存。

### 自定义页眉和页脚

通过从 “打印” 对话框的详情视图中的下拉菜单选择**页眉与页脚**，可广泛地自定义页眉和页脚。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/LzZt5i1605689425849.png)

 

1.  使用此菜单选择自定义页眉和页脚在打印文稿中显示的位置。选项包括 “主页”（应用到打印的每个页面，除非被其他页面样式改写）、“第一页”、“奇数页” 和“偶数页”。
2.  此**缩放比例**设置在从[网络视图](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/working-in-network-view/)打印时显示，并可控制文稿相对于其原始大小进行打印的缩放比例（以百分比表示）。从任务和资源视图打印的缩放比例在打印对话框[内容详情](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/reporting-and-printing/#printinginomniplan)的 “尺寸” 部分中定义。
3.  在您更新自定义页眉和页脚时，更改内容将反映在打印预览中，让您了解文稿在纸张上的视觉效果。
4.  页眉和页脚部分各自有三个可自定义的字段：左对齐、右对齐和居中对齐。您可以在此处输入自定义文本，或：
5.  使用**插入**菜单，将源自文稿的信息自动添加到页眉或页脚字段。这些自动生成的属性包括：
    *   **页码** — 根据其他配置选择计划要打印的当前页面。
    *   **打印时间** — 文稿开始印刷时计算机时钟衍生的时间。
    *   **最近修改时间** — 文稿最近一次修改的日期和时间。
    *   **绝对路径** — 文稿在计算机文件系统中的位置。
    *   **页码计数** — 打印文稿中的总页数。
    *   **项目标题** — 项目文件的名称。

**请注意**  
如果您在过滤器打开时打印一个项目，则只有可见任务会包括在打印的拷贝中。

使用报告窗口（专业版）
-----------

在 OmniPlan 3 专业版中，我们准备了更新、更强大的报告模板供您的项目使用，可用于打印或导出视觉上更为清晰易读的数据表。

要通过任一可用的模板来预览项目，可使用工具栏上的 “报告” 按钮或选择“文件”▸“报告…”(**Option-Command-R**) 来打开新的 HTML 报告界面。您可以直接在界面上选择模板打印或导出您的报告。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/AXrrOJ1605689426144.png)

 

1.  使用下拉菜单选择您想用于打印或导出项目的模板。
2.  水平扫动或滚动可浏览当前模板中的可用报告类型。您还将看到报告正文中复制的报告类型 — 这是为了在导出为 HTML 时提供报告内部导航。可用的报告类型包括：
    *   **项目概览** — 一份整体项目状态报告，并高亮显示项目差异、完成百分比和成本。
    *   **任务报告** — 有关项目任务状态的报告，如任务视图的大纲中所示。
    *   **资源报告** — 有关项目资源状态的报告，如资源视图的大纲中所示。
    *   **挣值分析** — 有关项目中任务[挣值](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/working-in-task-view/#earnedvalueanalysispro)的报告，如任务视图的大纲中所示。
    *   **甘特图** — 任务视图甘特图当前状态的图像快照。
    *   **资源时间线** — 资源视图时间线当前状态的图像快照。
    *   **Monte Carlo 模拟** — 包含[模拟结果](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/maintaining-your-project/#usingsimulationstoestimatemilestonecompletionpro)的报告，其中估算了项目中里程碑成本和完成时间的最佳、最差和期望案例。
3.  使用**重新加载报告**按钮可根据对您项目所做的任何新更改生成最新版的报告。
4.  使用**导出**按钮可生成完整项目报告的 PDF 或 HTML 导出副本（包括所有可用的报告类型）。下面提供了 HTML 完整报告的内容详情。
5.  使用**打印**按钮，可使用标准 Mac OS X 打印对话框选项打印当前选择的报告类型。这里还可使用将打印输出文件保存为 PDF 文件的选项。
6.  这是报告的 HTML 预览，呈现了其在导出后的视觉效果。

从 “报告” 窗口的 “导出” 对话框选择 **HTML 完整报告**选项后，您可以在 Finder 中挑选报告保存位置。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/vvZklP1605689426282.png)

 

保存时，会创建一个文件夹，其中包含项目的 HTML 格式完整报告。视用于导出的模板而定，可能包含下列项目（内置的 “真正的业务” 模板包含所有这些项目）：

*   与报告窗口中预览的各类报告对应的 HTML 文件（概览、任务报告、资源报告、挣值分析报告、甘特图、资源时间线和 Monte Carlo 模拟）。
*   具有 **calendars** （日历）标签的文件夹，其中包含项目里程碑（.ics 格式）的提示检查清单和作为日历事件（也为 .ics 格式）的各资源的任务。
*   具有 **todos** （待办事项）标签的文件夹，其中包含各个资源的任务的提示检查清单。
*   具有 **include** （包含）标签的文件夹，其中包含图像资产和描述报告外观的 .css 文件。

**注意**  
尽管 Apple 日历事件和提示检查清单使用相同的文件格式 (.ics) 导出，但是 OS X 非常智能，能够确定具体位置并在您二次点按文件后提示您可添加计划项目的正确位置。

您导出完整报告后便可在 Safari 中打开并打印各个页面，将日历事件和提示发送给您的团队，或编辑 CSS 和 HTML 以呈现像素完美的项目状态。

自定义报告模板（专业版）
------------

对 HTML 和 CSS 有所了解后，您便可以制作自己的 HTML 模板进行打印和导出。首先采用几个快速步骤从自定义模板开始：

1.  首先请转到 [OmniPlan 预置的 HTML 面板](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/omniplan-preferences/#htmlpreferencespro)。
2.  要创建新的模板，选择现有模板，然后从列表下方的齿轮菜单选择**编辑副本**。
3.  为模板输入名称并保存在便于操作的位置。
4.  新模板可以在 Finder 中打开，其是包含 HTML 和 CSS 文件的文件夹，您可以按照自己的喜好进行自定。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/6ataBA1605689426423.png)

 

**请注意**  
由于 OS X 中的安全更改，在 OmniPlan 2.3 之前的版本中创建的 HTML 模板会自动重置并不适用于直接编辑。为更改迁移模板的内容，选定它并从齿轮菜单选择**编辑副本**。

按照您想要的方式设置模板后，您可以在 “HTML 预置” 面板中对其进行管理，并在报告窗口中选择它作为模板进行打印和导出。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/WO0bWr1605689426458.png)

 

### 自定义模板标记

HTML 报告模板使用特殊的语法插入来自项目的数据。在您选择的文本编辑器中打开其中一个 HTML 文件，会发现含有 OmniPlan 标记的标准 XHTML，如下所示：

{@标记名称 @}

这些标记是有关项目整体的数据占位符。当使用该模板输出 OmniPlan 文件时，每个标记都会替换成与标记名称相对应的数据。

各种可用标记的参考如下：

**项目标记**

*   {@Date@} — 导出日期。
*   {@Version@} — 导出报告的 OmniPlan 版本。
*   {@Project Title@} － 项目标题，即在项目检查器的 “项目信息” 部分中设置的标题。
*   {@StartDate@}、{@EndDate@} — 项目的开始日期或结束日期。
*   {@StartTime@}、{@EndTime@} — 项目的开始时间或结束时间。
*   {@Duration@} — 整个项目的持续时间。
*   {@Completion@} — 整个项目的完成百分比，根据所有任务计算得出。
*   {@Cost@} — 整个项目的成本。
*   {@ResourceData@} — 将此标记放在表的 _tr_ 层次。其会为每个资源创建一个由三个单元格构成的行，包括资源名称、作为事件的资源分配的 iCalendar 文件链接，以及作为待办事项的资源分配的 iCalendar 文件链接。
*   {@ProjectCalendarLink@} —“项目里程碑” 日历的链接（如果有里程碑的话）。

**样式表标记**

*   {@ApplyStyleSheet include/style.css@} — 此标记通过指定样式表的路径，将 CSS 样式表应用到页面。导出时，此标记会被以下两项中的一项所替换：

如果导出完整的 HTML 报告，替换成作为外部文件的样式表链接。这样可使所有导出的 HTML 文件链接到同一样式表。

`<link rel="stylesheet" href="include/style.css"type="text/css" />`

如果只导出一个 HTML 页面（任务列表或资源列表），则替换成样式表的嵌入拷贝。这样会使所有内容都保留在一个 HTML 文件中。

`<style type="text/css"> [...] </style>`

**循环标记**

这些标记的作用与打开 / 关闭 HTML 或 XML 标记类似。输出时，OmniPlan 会在打开和关闭标记之间的所有内容间进行循环，插入每个任务或资源的数据。“分配”循环必须在 “资源” 循环内部发生，因为其列出的是分配给特定资源的任务。请确保已包含关闭标记，且任务专用标记或资源专用标记位于适当的循环标记之间。

*   {@Tasks@} 和 {@/Tasks@} — 列出导出中的所有任务；您可以在此循环内使用任务特定的标记。
*   {@Resources@} 和 {@/Resources@} — 列出项目中的所有资源；您可以在此循环内使用资源特定的标记和 “分配” 循环。
*   {@Assignments@} 和 {@/Assignments@} — 列出分配给资源的所有任务，只能用于 “资源” 循环内。在此循环内，您可以使用任务特定的标记。

**提示**  
小模板的一个方便选项是，移除 “资源” 循环中的 {@Assignments@}{@/Assignments@} 部分。{@Resources@} 为您提供每个资源，而 {@Assignments@} 提供当前资源的每个分配；如果省略 {@Assignments@}，则只会保留资源摘要信息。内置打印专用模板的索引页中展示了这点。

**任务标记**

这些标记可以用于资源的 “任务” 循环或 “分配” 循环内。

*   {@ID@} — 任务在大纲中的编号。
*   {@Title@} — 任务名称。
*   {@Start@}、{@End@} — 任务的实际开始或结束时间。
*   {@Time@} — 任务的持续时间。
*   {@Effort@} — 任务的投入值。
*   {@%Done@} — 任务的完成百分比。
*   {@Dependencies@} — 任务相关性的列表，格式与任务大纲中 “相关性” 栏的格式相同。
*   {@Cost@} — 任务本身的成本。
*   {@Resources Cost@} — 已分配资源的成本。
*   {@Total Cost@} — 任务和已分配资源的成本。
*   {@Assigned@} — 已分配资源的列表。
*   {@Planned Start@}、{@Planned End@} — 任务的基线开始或结束时间。
*   {@Start Variance@}、{@End Variance@} — 任务开始时间或结束时间的基线值与实际值之间的差异。
*   {@Constraint Start@}、{@Constraint End@} — 任务开始时间或结束时间的约束（如果有的话）。
*   {@Notes@} — 任务备注的文本（如果有的话）。
*   {@Priority@} — 任务的优先级，与任务大纲中的栏类似。
*   {@Status@} — 描述任务到期或过期状态的一些字，类似于 “任务” 大纲中的 “状态” 图标。
*   {@Violations@} — 与此任务相关的违例数。
*   \* 自定数据键 — 如果您加入的标记与其中一个自定数据键的名称完全匹配，则该标记会转换为给定任务的键值。例如，如果您的任务有一个 “位置” 键，则可以在模板中使用 {@位置 @} 标记。

**资源标记**

这些标记可以用于 “资源” 循环内。

*   {@Resource@} — 资源名称。
*   {@Start@}、{@End@} — 最早分配资源的实际开始时间或最后分配资源的结束时间。
*   {@Time@} — 已分配给资源的所有任务的总持续时间。
*   {@%Done@} — 已分配给资源的所有任务的完成百分比。
*   {@Resources Cost@} — 将此资源分配给其指定任务的总成本。
*   {@Resource Type@} — 资源类型（“人员”、“设备”、“材料” 或 “群组”）。
*   {@#@} — 资源的 “总单位” 值。
*   {@Notes@} — 资源备注的文本（如果有的话）。
*   {@Efficiency@} — 资源的效率值。
*   {@Cost/Use@}、{@Cost/Hour@} — 在资源检查器的 “资源信息” 部分中定义的每次使用成本值和每小时成本值。
*   {@Total Uses@}、{@Total Hours@} — 资源分配的总数或已分配的投入总量。
*   {@ResourceCalendarLink@} — 作为事件 iCalendar 文件的资源已分配任务的链接（如果已分配任务）。
*   {@ResourceToDoLink@} — 作为待办事项 iCalendar 文件的资源已分配任务的链接（如果已分配任务）。
*   \* 自定数据键 — 如果您加入的标记与其中一个自定数据键的名称完全匹配，则该标记会转换为给定资源的键值。例如，如果您的资源有一个 “电话号码” 键，则可以在模板中使用 {@电话号码 @} 标记。

**路径标记**

这些提供前往 HTML 输出特定页面的路径。您可以使用这些来在页面之间建立链接，例如：

`<a href="file:{@TaskReportPath@}">`

*   {@TaskReportPath@} — 前往此 HTML 导出的 “任务报告” 页面的文件路径。
*   {@ResourceReportPath@} — 前往此 HTML 导出的 “资源报告” 页面的文件路径。
*   {@ResourceTimelinePath@} — 前往此 HTML 导出的 “资源时间线” 图像的文件路径。
*   {@GanttChartPath@} — 前往此 HTML 导出的 “甘特图” 图像的文件路径。
*   {@ProjectCalendarPath@} — 前往此 HTML 导出的 “项目里程碑” 日历文件路径。

**挣值分析标记**

这些标记与[挣值分析](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/working-in-task-view/#earnedvalueanalysispro)功能在任务视图大纲中使用的栏相对应。

*   {@ev\_budgetedCostOfWorkScheduled@} — 已计划工作的预算成本；表示任务大纲中的 “计划值” 栏。
*   {@ev\_budgetedCostOfWorkPerformed@} — 已执行工作的预算成本；表示任务大纲中的 “挣值” 栏。
*   {@ev\_actualCostOfWorkPerformed@} — 已执行工作的实际成本；表示任务大纲中的 “实际成本” 栏。
*   {@ev\_costVariance@} — 挣值与实际成本之间的成本差异；表示任务大纲中相同名称的栏。
*   {@ev\_scheduleVariance@} — 进度差异；与计划值之间的距离（货币）；表示任务大纲中相同名称的栏。
*   {@ev\_estimateAtCompletion@} — 完工估算；表示任务大纲中相同名称的栏。
*   {@ev\_budgetedAtCompletion@} — 完工预算；表示任务大纲中相同名称的栏。
*   {@ev\_varianceAtCompletion@} — 完工差异；表示任务大纲中相同名称的栏。
*   {@ev\_costPerformanceIndex@} — 成本绩效指数；表示任务大纲中相同名称的栏。
*   {@ev\_schedulePerformanceIndex@} — 进度绩效指数；表示任务大纲中相同名称的栏。
*   {@ev\_costVariancePercent@} — 成本差异百分比；表示任务大纲中的 “成本差异 %” 栏。
*   {@ev\_scheduleVariancePercent@} — 进度差异百分比；表示任务大纲中的 “进度差异 %” 栏。
*   {@ev\_toCompletePerformanceIndex@} —“待完成绩效” 指数；表示任务大纲中相同名称的栏。

**Monte Carlo 模拟标记**

这些标记与用于计算 [Monte Carlo 模拟](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/maintaining-your-project/#usingsimulationstoestimatemilestonecompletionpro)以估算里程碑完工的值对应。它们不会自己运行模拟；而是使用项目最近的计算结果。

*   {@Milestones@} 和 {@/Milestones@} — 为项目中的每个里程碑重复模板。

*   {@chainCost@} — 截至此任务或里程碑的整条先决条件链的成本。

*   {@mc\_minimumCost@} — 任何 Monte Carlo 模拟运行的最低 chainCost。

*   {@mc\_averageCost@} — 每次 Monte Carlo 模拟运行的平均 chainCost。

*   {@mc\_maximumCost@} — 任何 Monte Carlo 模拟运行的最高 chainCost。

*   {@mc\_earliestCompletion@} — 任何 Monte Carlo 模拟运行的最早完成日期。

*   {@mc\_fiftyPercentCompletion@} — 完成 50% 或以上的模拟的日期。

*   {@mc\_latestCompletion@} — 任何 Monte Carlo 模拟运行的最晚完成日期。

    

