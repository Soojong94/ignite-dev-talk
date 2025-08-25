import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Video, 
  Globe, 
  Users, 
  FileText, 
  Code, 
  Award,
  Zap
} from "lucide-react";

const ResourceHubSlide = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "무료 학습 자료",
      color: "blue",
      glowClass: "neon-glow-blue",
      resources: [
        {
          name: "AWS Well-Architected Framework",
          description: "클라우드 아키텍처 설계 원칙",
          type: "공식 문서",
          level: "중급"
        },
        {
          name: "Microsoft Learn",
          description: "Azure 학습 경로 및 실습",
          type: "학습 플랫폼",
          level: "초급-고급"
        },
        {
          name: "Google Cloud Architecture Center",
          description: "GCP 아키텍처 패턴과 베스트 프랙티스",
          type: "가이드",
          level: "중급-고급"
        }
      ]
    },
    {
      icon: Video,
      title: "온라인 강의",
      color: "green",
      glowClass: "neon-glow-green",
      resources: [
        {
          name: "인프런 클라우드 강의",
          description: "한국어 클라우드 강의 모음",
          type: "유료 강의",
          level: "초급-중급"
        },
        {
          name: "A Cloud Guru",
          description: "클라우드 전문 교육 플랫폼",
          type: "유료 강의",
          level: "전체"
        },
        {
          name: "freeCodeCamp YouTube",
          description: "무료 클라우드 강의",
          type: "무료 강의",
          level: "초급-중급"
        }
      ]
    },
    {
      icon: Globe,
      title: "기술 블로그",
      color: "violet",
      glowClass: "neon-glow-violet",
      resources: [
        {
          name: "AWS Architecture Blog",
          description: "AWS 공식 아키텍처 블로그",
          type: "기술 블로그",
          level: "중급-고급"
        },
        {
          name: "우아한형제들 기술블로그",
          description: "국내 대표 기술 블로그",
          type: "기술 블로그",
          level: "중급"
        },
        {
          name: "Netflix Tech Blog",
          description: "대규모 시스템 운영 사례",
          type: "기술 블로그",
          level: "고급"
        }
      ]
    },
    {
      icon: Users,
      title: "커뮤니티",
      color: "orange",
      glowClass: "neon-glow-orange",
      resources: [
        {
          name: "AWS Korea User Group",
          description: "국내 AWS 사용자 모임",
          type: "사용자 그룹",
          level: "전체"
        },
        {
          name: "DEVOCEAN",
          description: "SK C&C 개발자 커뮤니티",
          type: "개발자 커뮤니티",
          level: "전체"
        },
        {
          name: "클라우드 스터디",
          description: "온라인 스터디 그룹",
          type: "스터디",
          level: "초급-중급"
        }
      ]
    },
    {
      icon: Code,
      title: "실습 환경",
      color: "cyan",
      glowClass: "neon-glow-cyan",
      resources: [
        {
          name: "AWS Workshops",
          description: "공식 실습 워크샵",
          type: "핸즈온",
          level: "초급-고급"
        },
        {
          name: "Qwiklabs",
          description: "클라우드 실습 플랫폼",
          type: "실습 환경",
          level: "전체"
        },
        {
          name: "Katacoda",
          description: "인터랙티브 학습 환경",
          type: "실습 환경",
          level: "초급-중급"
        }
      ]
    },
    {
      icon: Award,
      title: "자격증 준비",
      color: "red",
      glowClass: "neon-glow-red",
      resources: [
        {
          name: "AWS Skill Builder",
          description: "AWS 공식 학습 플랫폼",
          type: "학습 플랫폼",
          level: "전체"
        },
        {
          name: "Practice Exams",
          description: "모의고사 플랫폼",
          type: "시험 준비",
          level: "중급"
        },
        {
          name: "ExamTopics",
          description: "실제 문제 경험 공유",
          type: "문제 은행",
          level: "중급"
        }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    if (level.includes("초급")) return "text-[hsl(var(--green-400))]";
    if (level.includes("중급")) return "text-[hsl(var(--blue-400))]";
    if (level.includes("고급")) return "text-[hsl(var(--violet-400))]";
    return "text-[hsl(var(--orange-400))]";
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-8 overflow-y-auto">
      <div className="container max-w-7xl py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-blue">학습 리소스 허브</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className={`glass-card ${category.glowClass} h-full min-h-[400px]`}>
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-white/5">
                          <Icon className={`text-[hsl(var(--${category.color}-400))] w-7 h-7`} />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 text-left">
                      {category.resources.map((resource, resourceIndex) => (
                        <motion.div
                          key={resourceIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.3 + (index * 0.1) + (resourceIndex * 0.05),
                            duration: 0.3 
                          }}
                          className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-sm text-foreground">
                              {resource.name}
                            </h4>
                            <span className={`text-xs font-medium ${getLevelColor(resource.level)}`}>
                              {resource.level}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">
                            {resource.description}
                          </p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full bg-[hsl(var(--${category.color}-400)_/_0.2)] text-[hsl(var(--${category.color}-400))]`}>
                            {resource.type}
                          </span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Start Guide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gradient-purple">학습 단계별 추천 리소스</h3>
            
            <div className="grid gap-6 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Card className="glass-card neon-glow-green h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-white/5">
                        <Zap className="text-[hsl(var(--green-400))] w-6 h-6" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--green-400))]">입문자</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">1단계:</strong> AWS Cloud Practitioner 학습
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">2단계:</strong> AWS Workshops 기초 실습
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">3단계:</strong> 커뮤니티 가입 및 활동
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <Card className="glass-card neon-glow-blue h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-white/5">
                        <FileText className="text-[hsl(var(--blue-400))] w-6 h-6" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--blue-400))]">중급자</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">1단계:</strong> Well-Architected Framework 학습
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">2단계:</strong> 기술 블로그 정기 구독
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">3단계:</strong> 개인 프로젝트 진행
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <Card className="glass-card neon-glow-violet h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-white/5">
                        <Users className="text-[hsl(var(--violet-400))] w-6 h-6" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-[hsl(var(--violet-400))]">고급자</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">1단계:</strong> 대규모 시스템 아키텍처 연구
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">2단계:</strong> 컨퍼런스 발표 및 멘토링
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">3단계:</strong> 오픈소스 기여 활동
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Action Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="mt-8 p-6 glass-card neon-glow-orange max-w-5xl mx-auto"
          >
            <h3 className="text-xl font-bold text-gradient-orange mb-4">오늘부터 시작하기</h3>
            <div className="grid gap-4 md:grid-cols-2 text-left text-sm">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">📚 학습 계획 수립:</strong> 위 리소스 중 3-5개 선택
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">💬 커뮤니티 가입:</strong> 최소 2개 커뮤니티 참여
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">🛠️ 실습 환경 구축:</strong> 무료 계정 생성 및 첫 실습
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">📝 학습 기록:</strong> 기술 블로그나 노션으로 정리
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResourceHubSlide;