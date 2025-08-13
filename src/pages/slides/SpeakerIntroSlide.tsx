import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SpeakerIntroSlide = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center p-8">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-purple">강연자 소개</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-card neon-glow-violet h-full">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-center">전문 성과</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gradient-green mb-2">99.9%</div>
                      <p className="text-lg text-muted-foreground">서비스 안정성</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gradient-blue mb-2">30%</div>
                      <p className="text-lg text-muted-foreground">비용 절감</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gradient-orange mb-2">0건</div>
                      <p className="text-lg text-muted-foreground">보안사고</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-card neon-glow-blue h-full">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-center">기술 전문성</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="text-xl font-semibold text-gradient-blue">멀티클라우드</div>
                      <p className="text-muted-foreground">AWS, Azure, GCP</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xl font-semibold text-gradient-violet">Kubernetes</div>
                      <p className="text-muted-foreground">컨테이너 오케스트레이션</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xl font-semibold text-gradient-green">DevOps 파이프라인</div>
                      <p className="text-muted-foreground">CI/CD 자동화</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-center">
                    <Button asChild variant="glass" size="lg" className="px-6">
                      <a 
                        href="https://cloudrepo.kro.kr/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        블로그 방문하기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpeakerIntroSlide;