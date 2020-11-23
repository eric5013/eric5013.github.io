---
title: OmniPlan for Mac 官方教程 04——维护您的项目
date: 2020-11-17
category: omniplan-tutorial

---

> 设置并开始运行项目后，OmniPlan 会协助您像精心照料一株盆栽一样让项目逐渐成型。如果出现意外情况，可对项目进行调整，使其保持航向而不偏离目标。本章说明了违例、安排和分级、建立和使用基线计划表、跟踪和重新安排任务等工具，确保您的项目准确地反映出现实中的状况。

真正启动项目的一刻也就是现实中各种因素开始对理想中的计划造成影响的一刻。当各种变数开始出现时，要保证项目顺利进行，对项目的各方面进行调整以适应新的情况是尤其关键的。

解决违例
----

会违反您对项目设置的逻辑规则的情况也偶尔会出现。出现这些情况时，OmniPlan 会在相关任务的旁边给出违例提示。任务大纲的 “违例” 栏中会出现一个红色的图标，并会出现违例窗口。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/LaJHrz1605602002595.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_02_violationintaskview.png)

要体验实际操作，可尝试创建两个任务互相依赖的循环相关性。这在逻辑上是不可能的，因此会出现违例。

违例窗口  
如果项目中出现违例，违例窗口将会出现，向您告知错误的所在。您也可以通过单击任务视图的 “违例” 栏上的图标、工具栏中的 “违例” 按钮或使用快捷键 Shift-Command-V 来打开它。

该窗口列出了项目中的所有违例，并附有说明解释其各自发生的原因。多数违例说明中都包含链接，您可以点按链接，立即解决问题。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/zlirUr1605602002597.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_03_violationswindow.png)

如果违例窗口中提供的自动解决方法不合您意，窗口底部的提示可帮助您确定问题的来源，让您根据计划的需要将其修复。

安排和分级
-----

任务检查器的安排方式表示 OmniPlan 应如何确定何时在项目中启动任务。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/wCWFTW1605602003105.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_08_schedulingsplittingleveling.png)

根据预设，在分级之前，新任务的被安排为在可能的前提下尽快。这表示会让任务尽快开始，并同时考虑到开始和结束时限，以及与其他任务的相关性。因为资源可用性不纳入考虑范围，所以可能会导致资源过度利用（这也是将分级视为重要的补充步骤的原因）。

可以将任务安排为尽可能地迟或锁定（用任务检查器的 “计划表” 部分中起始和结束日期上方的锁状图标，或者按住 Command 并在甘特图中单击任务条的任一端），使其不受分级影响。

您在分级项目时（如果选择了 “项目”▸“自动分级资源”，则在作出更改时），OmniPlan 将重新安排已分配资源的任务，以保证任何资源均不会以高于 100% 的可用性被使用。被资源分级移回的任务将按资源可用性安排。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/5C7Xnt1605602003166.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_09_schedulingresourceavailability.png)

在分级期间，OmniPlan 必须决定：哪个任务应该首先使用资源，而哪个任务的使用资源时间应该推迟（用资源关联线表示）。在判定哪个任务应该首先使用资源时，会依照以下顺序：

1.  要求在特定的时间结束的需求，例如锁定结束日期、时限，或作为具有这种需求的任务的必要条件。
2.  任务优先级，其是在任务大纲的 “优先级” 栏中设置。
3.  任务大纲中的位置，位置越高的任务安排时间越早。

持续时间和投入  
持续时间和投入是与安排任务及分级项目以优化效率的过程息息相关的两个关键概念。

持续时间是某个任务在计划表中实际花费的工作时数。如果该任务从 8:00 开始，到 12:00 结束，那么持续时间就是 4 个小时。请注意，非工作时数不计算在内；如果某个任务从下午开始，到第二天早上才结束，或者跨越午休时间，那么只会计算工作时数。还要注意，分配给任务的资源的工作时数可能与项目的整体工作时数不同，因此，任务的显示持续时间可能与其投入量并不完全匹配。

投入是所有已分配资源实际投入到任务中的总工作时数。如果某个任务的持续时间是 4 个小时，分配的 2 个资源的使用率皆为 100%，则投入值为 8 个小时。请注意，“素材”资源并不影响投入，只有 “人员” 和“设备”资源与投入相关。

一项任务的持续时间和投入可根据所分配的资源而更改。

每项任务在其任务检查器中均有设置，以控制是否保留已修复的持续时间、已修复的投入，或者是否全部保留。

当您分配或取消分配人员和设备资源时，不是已修复的值将重新计算值；而另一个栏位则保持不变。无论计算哪个值，您始终都可以对任何一个值进行手动编辑。

如果两个值已修复，则分配资源将改变分配的百分比。

导致持续时间和投入变化的因素  
影响持续时间和投入的因素有多种。最常见的变量如下所示 ，调整这些变量可帮助项目在预期截止日期前完成。

已经分配资源的数量  
分配给任务的资源越多，通常任务所花费的时间就越少，因为所需的投入会在更短时间内完成。  
已分配资源的效率  
分配给任务的资源的效率越低，持续时间超过投入的时间就越长，因为资源要花费更多的时间才能达到相同的投入量。  
已分配数量和可用单位  
分配给任务的资源单位越少，持续时间超过投入的时间就越长，因为资源花费在该任务上的时间和精力都较少。当一个资源同时分给多个任务使用时，这种情况很常见。可分配给任务的资源数量取决于资源的可用 “单位”（在资源检查器的“资源” 部分或资源大纲的 “单位” 栏中设置）。分配的资源超过可用的资源数量会导致违例，并且会在资源时间线中显示为过度利用。

使用重要路径
------

在甘特图或网络图中查看项目或里程碑的重要路径非常有助于了解哪些任务对于按时完成目标最重要。找出哪些任务属于重要路径（或反过来）可帮助划分工作的轻重缓急，以确保在截止日期前完成工作。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/B1BDD41605602003183.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_12_criticalpathoverview.png)

默认情况下，OmniPlan 会根据任务之间的关联性以及任务之间的空闲时段来确定重要路径。

*   在关联性方面，一系列连续的、具有 “完成 ▸ 开始” 关联性的任务就是一条简单的、通向项目结束的重要路径。与之无关联的任务则不会出现在路径上，因为它们可以出现在项目中的任何时刻。
*   在弹性时间方面，吊床任务（或开始日期固定的项目，其开始之前有其他工作已经完成）会在项目中造成无事可做的空闲时段。可以在里程碑检查器中设置这些空闲时段的长度，该长度将决定是否会影响到重要路径。

注：另一个可能影响重要路径的因素是资源可用性。可在里程碑检查器中选择是否要在重要路径的显示中考虑这一因素；该部分还包括有关资源可用性对重要路径的影响的信息，类似上面的的安排和分级部分。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/8YlwKB1605602003219.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_14_critpathbutton.png)

OmniPlan 即可对整个项目也可对单独的里程碑显示重要路径。要打开重要路径，单击工具栏中的重要路径按钮；要选择要显示的重要路径，单击按钮角落上的箭头并选择所需的里程碑，或在里程碑检查器中选择它们。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/XMv6iY1605602003106.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_13_networkviewcritpaths.png)

更新任务完成情况
--------

如果一切都如计划进行，只需单击工具栏中的同步更新按钮。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/eteET21605602003206.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_16_catchupui.png)

选择日期和时间（预设是今天），是否允许将任务标记为部分完成，以及是更新所有任务还是只更新所选任务。

单击 “确定” 后，任务的完成百分比会更新到特定日期和时间。

重新安排未完成的任务
----------

如果任务未按预期完成，可以通过重新安排工具栏按钮来快速确定其在当前情况下的最佳位置。

单击 “重新安排” 按钮可打开以下对话框。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/tiOXxw1605602003204.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_17_rescheduleui.png)

选择日期和时间重新安排未完成的任务，并选择是更新所有任务还是只更新所选任务。

单击 “确定” 后，未完成的任务会移动，且整个计划表都会更新，以便从新日期继续该任务的工作。

请注意，这只会移动包含在您指定的日期之前就应该完成而未完成的工作的任务；而不会影响后来的任务。

用基线衡量进度
-------

当您已完成项目设置并准备着手实现之后，可以设置基线计划表。基线计划表表示项目的原始目标，用来与实际计划表进行比较。与之相反，实际计划表反映的是项目的实际完成情况。设置项目基线之前，基线计划表与实际计划表相同。设置基线之后，进一步的变更只会影响实际计划表。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/PfsEmI1605602003220.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_11_settingabaseline.png)

要设置基线，单击工具栏中的设置基线按钮。随即会出现一个字段，用于为基线命名，默认名称是今天的日期。

单击 “设置基线” 按钮，完成基线计划表的设置。今后的任何更改都会在实际计划表中反映出来。

选择分割计划表或双计划表，将基线计划表与实际计划表放在一起进行查看，以便进行比较。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/KcQKQF1605602003279.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_15_splitvsactualbaseline.png)

OmniPlan 3 支持任意数量的基线，因此在项目进行中的任意时刻，您都可以进行快照并以此作为新的标准，作为后面实际项目进行的参照。您可以通过工具栏的基线 / 实际菜单来将某个基线与当前实际计划表比较。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/maoTe51605602003396.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_10_multiplebaselines.png)

通过模拟来估算里程碑完成情况（专业版）
-------------------

OmniPlan 3 专业版包括了可用于计算某个里程碑按时完成的可能性的工具，该工具使用 Monte Carlo 模拟方法，并以达到某个目标所需的投入作为估算的依据。这些模拟的结果可帮助找出可能发生进度滞后（或超前）的环节。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/g7ZyYf1605602003402.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_18_montecarlooverviewer.png)

要运行模拟，切换到任务视图并选择工具栏中的模拟按钮。此处选择的设置（以及模拟自身）会涵盖任何选定的任务和里程碑；如果未选定任何任务，则模拟会涵盖整个项目。

模拟提供的可能性由完成各个里程碑之内的任务所需的估算工作量决定。如果没有手动设置任务的估算工作量，则需要进行该设置，或使用方便的自动估算工作量功能（也可在 Monte Carlo 弹出菜单中找到）。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/SsIPXV1605602003659.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_07_montecarlomenu.png)

注：在不设置最小和最大估算工作量（手动或自动）的情况下运行模拟会导致您的里程碑都会 100% 精确地在里程碑处按计划完成。这种模拟显然没有什么意义。要得到最好的结果，请务必对可能投入的工作量限制范围（可通过自动估算工作量轻松完成）。

模拟完成后，一组水平条会出现在各个里程碑（由一个小的菱形表示）周围的日期处；每根水平条代表在该日期完成里程碑的可能性有 20%（5 根水平条表示根据模拟，某个里程碑有 100% 的可能性在该日期完成）。将鼠标悬停在各日期上的水平条可查看更详细的信息。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/bgh5oP1605602003703.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_04_montecarlomouseover.png)

使用 AppleScript（专业版）
-------------------

通过 OmniPlan Pro，您可访问使用内置 AppleScript 库的强大脚本处理工具。要访问特定于 OmniPlan 的脚本处理命令字典，打开 AppleScript 脚本编辑器并选择文件 ▸ 打开字典 (Shift-Command-O)，然后从出现的列表中选择 OmniPlan.app。

[![](https://gitee.com/eric-zeng/image/raw/master/picBed/image/png/Fv9rd51605602003719.png)](http://www.lichangtai.com/wp-content/uploads/2016/12/op3mac_ch04_01_applescript.png)

