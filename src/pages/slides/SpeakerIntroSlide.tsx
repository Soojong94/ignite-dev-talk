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
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="text-xl font-semibold text-gradient-green">클라우드 인프라 설계</div>
                      <p className="text-muted-foreground">엔터프라이즈 시스템 구축</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xl font-semibold text-gradient-blue">DevOps 프로세스</div>
                      <p className="text-muted-foreground">자동화 및 모니터링</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xl font-semibold text-gradient-orange">보안 컨설팅</div>
                      <p className="text-muted-foreground">클라우드 보안 전략</p>
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