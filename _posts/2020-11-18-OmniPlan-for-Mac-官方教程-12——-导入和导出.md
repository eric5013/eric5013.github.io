---
title: OmniPlan for Mac 官方教程 12—— 导入和导出
date: 2020-11-18
category: omniplan-tutorial

---

> 虽然 OmniPlan 提供执行任何复杂度的项目所需的一切工具，但有时候为满足外来的需求，您可能需要求助于 OmniSphere 之外的工具。好消息是，OmniPlan 对于这一点也毫不马虎！这一章详细介绍了本应用程序能够支持并导出的所有格式，以及 OmniPlan 专业版对 Microsoft Project 的支持。

OmniPlan 是一款很棒的独立应用程序，不过它的功能还不止于此。当您需要联系平台内的客户或同事时，OmniPlan 可通过各种方式与其他应用程序和服务进行交互。

从其他格式导入
-------

OmniPlan 支持多种其他应用程序的文件格式。在 OmniPlan 中打开这些文件的方式，与打开 OmniPlan 文稿相同。文件会输入到一个全新的 OmniPlan 文稿中，您便可以执行编辑、存储或输出操作。

当需要导入除 OmniPlan .oplx 文件（或者如果使用专业版，则为 .opld 仪表盘文件）以外的文件时，选择 “文件”▸“打开”(**Command-O**)，务必勾选 “打开” 对话框中的**允许导入识别的其他文件类型**。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/Y1GoKO1605689590898.png)

OmniPlan 3 可识别并导入下列文件格式：

**逗号分隔值** (.csv) 和**以制表符定界的文本**文件 (.txt)

OmniPlan 可以从纯文本文件中读取逗号分隔值或以制表符定界的值。要查看应该如何格式化 CSV 文件中的数据，请将 OmniPlan 文稿输出为 CSV 文件，然后在任意文本编辑器中打开输出结果。以制表符定界的文件的格式与 CSV 文件类似，只不过是使用制表符代替逗号来分隔栏位。

**OmniOutliner 3**（.oo3 和 .ooutline）

可以从 OmniOutliner 文件输入任务列表。荧幕上会出现对应对话框，您可以在其中选择哪个大纲栏应该对应任务信息的哪个栏位。如果大纲具有多级层次，则会创建任务群组。

**OmniGraffle** (.graffle)

可以从 OmniGraffle 图表输入任务列表。对象的标题成为任务标题，连线的层次决定任务群组的层次。

导出为其他格式
-------

OmniPlan 能够以多种格式撰写文件，以用于其他应用程序。若要导出 OmniPlan 文件，请选择 “文件”▸“导出”(**Option-Command-E**)。输出时，会创建一个新文件，您的原始文稿仍会保持不变。请注意，并不是所有文件格式都能够表现出 OmniPlan 文稿的所有特征；如果与其他应用程序配合使用，请考虑[发布和订阅](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/collaboration-and-multi-project-review-pro/)。

如果您在过滤器打开时导出一个项目，则可选择是导出整个项目还是仅导出可见的内容。

**OmniPlan 文稿** (.oplx)

当然，OmniPlan 可以输出为自有格式。如果您想要使用过滤功能制作新的 OmniPlan 文件，使其中的任务符合特定标准，这会很有用— 只需[过滤任务](https://support.omnigroup.com/documentation/omniplan/mac/3.0/zh/working-in-task-view/#filteringthetaskoutline)并确保在导出项目前勾选**仅过滤的内容**。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/Y5G5yk1605689591168.png)

**OmniPlan 1** (.omniplan)

如果您需要与 OmniPlan 第一代的旧文件格式进行交互，OmniPlan 3 可以将文稿全部导出或者只将过滤后的内容导出为 OmniPlan 1 可以使用的格式。

**注意**  
最新的 .oplx OmniPlan 文件格式支持较旧的 .omniplan 格式不支持的多种功能。针对 OmniPlan 1 导出时，时限（_开始不早于、结束不早于_等）等功能和 “发布 / 订阅” 设置将会丢失。

**iCalendar** (.ics)

这是 Apple iCal、Apple 日历以及许多其他日历应用程序所使用的日历格式。您可以选择是将任务输出为日历事件，还是输出为任务列表中的项目。如果您输出日历事件，则还可以选择是否让每个任务都成为一个单一事件，而无论其的长短（每个任务一个事件），或者让任务在跨距工作小时和非工作小时时分成若干块（每个工作时段一个事件）。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/ukwli01605689591220.png)

**逗号分隔值** (.csv)

CSV 是一种许多应用程序都可以读取的常见纯文本格式。

如果您在让其他应用程序读取 CSV 文件中的非 ASCII 字符（例如，重音字母或非罗马字符）时遇到困难，则尝试使用其他编码选项导出。这样某些应用程序便可轻松检测正确的编码并恰当地解释字符。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/jPyZqx1605689591598.png)

**导出图像**（.png、.pdf、.tiff、.jpg）

您可以输出任务视图或资源视图的图片（取决于主窗口中打开的是哪个视图）。在 “输出” 面板中，您可以选择图像是应该包括大纲、图表，还是二者都包括。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/3C7cbb1605689591347.png)

**OmniOutliner 3** (.oo3)

任务大纲导出为 OmniOutliner 3 文件（该格式也可供 OmniOutliner 4 使用），并包含对应于 OmniPlan 任务群组的行层次结构和对应于 OmniPlan 任务视图中可用任务群组的栏。导出为 .oo3 格式的 OmniPlan 项目在 OmniOutliner 4 中打开时显示如下：

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/wIWLPj1605689591550.png)

**OmniGraffle**

在一系列图表类型和样式中有多种类型的 OmniGraffle 导出可用。

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/OOSRUx1605689591360.png)

用于导出的可用图表类型包括：

*   **工作分析结构**以对象的树状结构表示任务和群组。在这种图表类型中，连线表示任务大纲的层次；图表中并不显示关联线。
*   **节点式网络图表**以对象表示任务，各对象之间以关联线连接。甘特图强调的是持续时间，而这种图表强调的则是相关性路径。
*   **箭头式网络图表**以对象间的线条表示任务，任务的标题和持续时间则显示为每条线上的标签。与节点式网络图表一样，这种图表也强调相关性。

导出为工作分析结构或节点式网络图表时，您可以在两种不同的节点**样式**之间选择：以_基本对象_表示任务的节点（仅显示任务名称）或以_表格_表示任务的节点（显示任务名称、已分配资源、开始日期和结束日期）。

如果您拥有 OmniGraffle，则可以对从 OmniPlan 导出的图表进行样式设计和编辑。如果您没有，也可以使用未许可的 OmniGraffle（可从 [OmniGroup.com](http://www.omnigroup.com/) 取得）查看、打印或导出图表。

Microsoft Project 支持（专业版）
-------------------------

如果您的工作涉及整条业务线并需要将 OmniPlan 与 Microsoft Project 配合使用，那么有好消息了 — OmniPlan 专业版支持导出为绝大多数项目文件格式，同时也可从这些格式导入。

可以使用 OmniPlan 专业版打开通过 Microsoft Project 版本 2003 至 2013 以 Microsoft Project 的 .xml、.xml、.mpx 或 .mpp 格式创建的文稿。新打开的 Microsoft Project 文件在 OmniPlan 中显示如下：

![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/hBb75X1605689591814.png)

如果文稿中出现错误，可以使用 “导入的文稿” 蓝条中的**报告问题**告诉我们相关情况。点按**完成**可关闭蓝条并回到工作中。

除从最常用的 MS Project 格式导入，OmniPlan 专业版还可导出为这些格式。支持以下 Microsoft Project 格式：

**Microsoft Project Exchange** (MPX)

MPX 是较旧的兼容格式，只能使用 Microsoft Project 2002 和更早版本读取，使用 Microsoft Project 98 和更早版本写入。这种格式完全不支持 Unicode 字符编码标准，不如 Microsoft Project MPP 和 XML 格式可靠。

**Extensible Markup Language** (XML) 和 **Microsoft Project Plan** (MPP)

Microsoft Project 2003 至 2013 可以读写这些格式。对于与 Microsoft Project 现代版的大多数交互，MPP 为首选格式；作为开放式标准，XML 也用于与其他应用程序进行交互。

**注意**  
OmniPlan 的 Microsoft Project MPP 导出经过更新，具有与我们支持的最新 MPP 格式（供 Microsoft Project 2013 使用的格式）的最高兼容性。OmniPlan 生成的 MPP 文件仍然将在旧版 Microsoft Project 中打开，但可能无法供它们完全读取。

旧版 Microsoft Project 可能提示您下载 Microsoft 提供的更新或转换程序，以支持 OmniPlan 导出的新文件格式。

### Microsoft Project 导入和导出中的杂项

OmniPlan 非常善于使用 Microsoft Project 文稿并且包含 Microsoft Project 2013 .mpp 格式，而我们始终致力于精益求精。在 OmniPlan 中使用 Microsoft Project 文稿时请注意下列事项：

**任务群组的分配**

在 Microsoft Project 中，可以将某个资源分配给一组任务。在 OmniPlan 中，这只是将资源分配给群组中的所有任务，而不是分配给群组本身。当您导入的 Microsoft Project 文稿包含任务群组的分配，违例栏中会显示警告，通知您未导入分配。

**自定义栏**

任务和资源大纲中的许多可选栏在 Microsoft Project 中都没有直接的类似物，反之亦然。从受影响的应用程序导入或导出到该应用程序时，这些栏不会显示，其中的数据也会留下。

**效率**

Microsoft Project 不支持资源的 OmniPlan 效率属性。

**设计样式（文稿、任务和资源）**

当导出为 Microsoft Project 格式时，应用到 OmniPlan 中的项目的样式以及应用到整个项目的项的样式不会一起导出。

**不等分配**

在 Microsoft Project 中，如果为一个任务分配多个资源，您可以指定每个所分配资源的投入时数。如果您不指定时数，其会按照使任务最快完成的方式分配每个资源（同时考虑计划表和资源分配单位）。OmniPlan 总是使用相同的自动方法。因此，如果已指定任务的资源投入时数，则该任务在 OmniPlan 中所花费的时间可能与 Microsoft Project 不同。

**Unicode 字符**

Microsoft Project MPX 格式不支持 Unicode 字符编码标准。如果您的项目包含 Unicode 字符（例如一些中文文本），那么您应该改为使用更新点的 Microsoft Project XML 或 MPP 格式。
