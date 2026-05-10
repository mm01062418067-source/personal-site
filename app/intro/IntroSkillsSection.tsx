"use client";

const headingClass = "text-2xl font-semibold tracking-tight text-foreground";

const skillGroups = [
  {
    title: "编程与建模",
    items: ["C", "MATLAB", "Python", "Verilog", "数值优化", "数据可视化"],
  },
  {
    title: "科研与写作工具",
    items: ["Word", "Origin", "LaTeX", "论文写作", "数据分析", "图表整理"],
  },
  {
    title: "专业软件与硬件开发",
    items: ["Keil", "CCS", "CubeMX", "Quartus", "Arduino", "嵌入式系统调试"],
  },
  {
    title: "方法关键词",
    items: ["UV–Vis–NIR 光谱", "机器学习回归", "PCA+LDA 分类", "TF-IDF", "LDA 主题模型", "遗传算法"],
  },
] as const;

export function IntroSkillsSection() {
  return (
    <section
      className="mt-16 border-t border-section-divider pt-12"
      aria-labelledby="intro-skills-heading"
    >
      <h2 id="intro-skills-heading" className={headingClass}>
        技能与工具
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-xl border border-border bg-card/50 p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}